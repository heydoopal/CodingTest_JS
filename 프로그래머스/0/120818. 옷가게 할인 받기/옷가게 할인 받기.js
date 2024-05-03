function solution(price) {
  let ans = price;
  if (price >= 500000) {
    ans *= 0.8;
  } else if (price >= 300000) {
    ans *= 0.9;
  } else if (price >= 100000) {
    ans *= 0.95;
  }
  return parseInt(ans);
}