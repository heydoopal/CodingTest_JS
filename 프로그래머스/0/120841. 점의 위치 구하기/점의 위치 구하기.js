function solution(dot) {
  // dot의 [0] > 0 이면 A || D
  // dot의 [1] > 0 이면 A
  // else D
  // dot의 [0] < 0 이면 B || C
  // dot [1] > 0 이면 B
  // else C

  if (dot[0] > 0) {
    if (dot[1] > 0) return 1;
    else return 4;
  } else {
    if (dot[1] > 0) return 2;
    else return 3;
  }
}
