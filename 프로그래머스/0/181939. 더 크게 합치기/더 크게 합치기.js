function solution(a, b) {
  let sumA = +(a + '' + b);
  let sumB = +(b + '' + a);
  return sumA >= sumB ? sumA : sumB;
}