function solution(num_str) {
  let total = 0;
  for (let num of num_str) {
    if (num !== 0) total += +num;
  }
  return total;
}