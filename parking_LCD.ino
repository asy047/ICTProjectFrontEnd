// 차단기,  LCD 출력 코드

#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <Servo.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);  // LCD

int motor_control = 8;
Servo servo;

#define trigPin1 13 
#define echoPin1 12

#define trigPin2 11 
#define echoPin2 10

void setup()
{
  Serial.begin (9600); 
  lcd.begin();  // LCD 시작
  pinMode(trigPin1, OUTPUT); 
  pinMode(echoPin1, INPUT); 
  pinMode(trigPin2, OUTPUT); 
  pinMode(echoPin2, INPUT);
  servo.attach(motor_control); // 모터사용
}

void parking_breaker() // 차단기
{
  servo.write(90);
  delay(1000);
  servo.write(0);
  delay(1000);
}

long ultrasonic(int trig, int echo) // 초음파 거리감지
{
  long duration;
  digitalWrite(trig, LOW);
  delayMicroseconds(2); 
  digitalWrite(trig, HIGH);
  delayMicroseconds(10); 
  digitalWrite(trig, LOW);
  duration = pulseIn(echo, HIGH); 
  return duration;
}

long microsecondsToCentimeters(long microseconds)
{
  return microseconds / 29 / 2;
}

void parking_area(int cm1, int cm2) // 주차 가능 대수
{ 
  int count = 0;
  // Serial.print(cm1);
  // Serial.println(" : cm 1 "); 
  // Serial.print(cm2);
  // Serial.println(" : cm 2 "); 
  if(cm1 < 10){
    count++;
  }
  if(cm2 < 10){
    count++;
  }
  lcd.clear();
  lcd.print("parking area : ");
  lcd.print(count);
}

void loop()
{
  long cm1, cm2;

  parking_breaker();

  ultrasonic(trigPin1, echoPin1);
  cm1 = microsecondsToCentimeters(ultrasonic(trigPin1, echoPin1));
  ultrasonic(trigPin2, echoPin2);
  cm2 = microsecondsToCentimeters(ultrasonic(trigPin2, echoPin2));

  parking_area(cm1, cm2);
}
