#include "Motor_True.h"

void motorTrue(Servo &servo) {
  servo.write(80);  // 정방향 모터 동작
  delay(1500);  // 1.5초 대기
}
