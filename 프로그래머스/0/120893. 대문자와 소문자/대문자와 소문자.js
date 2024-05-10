function solution(my_string) {
  let ans = '';
  for (let str of my_string) {
    ans += str === str.toUpperCase()
      ? str.toLowerCase()
      : str.toUpperCase();
  }
  return ans;
}