#include "Motor_False.h"

void motorFalse(Servo &servo) {
  servo.write(100);  // 역방향 모터 동작
  delay(1500);  // 1.5초 대기
}
