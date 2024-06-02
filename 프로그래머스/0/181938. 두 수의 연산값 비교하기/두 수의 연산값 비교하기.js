function solution(a, b) {
  let strSum = +(a + '' + b);
  let mulSum = 2 * a * b;
  return strSum >= mulSum ? strSum : mulSum;
}