#include <Servo.h>
#include "/Users/jeseung/Documents/대외활동/ICT/EV주차장/HW/Motor_True.h"
#include "/Users/jeseung/Documents/대외활동/ICT/EV주차장/HW/Motor_False.h"

// 모터 객체
Servo servo;

int a = 1;  // 변수 a의 값 설정 (1일 때 정방향 모터 실행)

void setup() {
  // put your setup code here, to run once:
  servo.attach(7);  // 모터에 핀 번호 7을 연결
}

void loop() {
  // put your main code here, to run repeatedly:
  if (a == 1) {
    motorTrue(servo);  // 정방향 모터 동작
  } else {
    motorFalse(servo);  // 역방향 모터 동작
  }
}
