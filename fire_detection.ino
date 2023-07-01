int led = 3;  // 화염감지 LCD
int B_led = 5;  // 가스감지 LCD
int sensor = 2; // 화염감지
int Gas = A0; // 가스센서

void setup() 
{ 
  Serial.begin (9600); 
  
  pinMode(led, OUTPUT);
  pinMode(sensor, INPUT);
  pinMode(Gas, INPUT);
} 

void fire_detection(int sensor) // 화염감지
{
  if( digitalRead(sensor) == LOW ){
    digitalWrite(led, HIGH);
    delay(500);
  }
  else
    digitalWrite(led, LOW); 
}

void harmful_gas(int gas_value) // 유해가스탐지
{
  if(gas_value > 350){
    digitalWrite(B_led, HIGH);
    delay(500);
  }
  else{
    digitalWrite(B_led, LOW);
  }
  Serial.print("Gas : "); 
  
  Serial.println(analogRead(Gas));
}

void loop() 
{   
  int Gas;

  fire_detection(sensor); // 화염감지
  
  Gas = analogRead(Gas);
  harmful_gas(Gas); // 유해가스탐지

  delay(100); 
}
