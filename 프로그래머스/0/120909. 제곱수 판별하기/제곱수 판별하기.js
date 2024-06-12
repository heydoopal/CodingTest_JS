function solution(n) {
  let sqrt = Math.sqrt(n);

  return Number.isInteger(sqrt) && Math.pow(sqrt, 2) === n ? 1 : 2;
}
