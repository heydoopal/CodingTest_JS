function solution(numbers, n) {
  // numbers의 원소들 다 더하다가 n보다 커지면 return
  let sum = 0;
  let i = 0;
  while(sum <= n && i < numbers.length) {
    sum += numbers[i]
    i++
  }
  return sum;
}
