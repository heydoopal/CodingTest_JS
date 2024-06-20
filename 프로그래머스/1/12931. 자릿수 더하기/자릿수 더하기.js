function solution(n) {
  let sum = 0;
  let strN = String(n);
  for (let i = 0; i < strN.length; i++) {
    sum += +(strN[i]);
  }
  return sum
}
