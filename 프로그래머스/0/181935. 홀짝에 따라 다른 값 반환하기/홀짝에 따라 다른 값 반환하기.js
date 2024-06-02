function solution(n) {
  let result = 0;
  if (n % 2 !== 0) {
    // n이하의 홀수인 모든 정수 합
    for (let i = 1; i <= n; i += 2) {
      result += i;
    }
  } else {
    // n이하의 짝수인 모든 정수의 곱의 합
    for (let i = 2; i <= n; i += 2) {
      result += Math.pow(i, 2);
    }
  }
  return result
}