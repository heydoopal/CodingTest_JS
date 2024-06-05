function solution(n) {
  // n의 약수를 구하고 그 약수 모두 더해서 return
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}
