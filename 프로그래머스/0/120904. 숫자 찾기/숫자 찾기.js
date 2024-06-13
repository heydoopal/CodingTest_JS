function solution(num, k) {
  let strNum = num + '';
  return strNum.includes(k) ? strNum.indexOf(k) + 1 : -1;
}