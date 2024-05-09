function solution(my_string) {
  let sum = 0;
  let numbers = my_string.match(/\d/g);
  numbers.filter(num => sum += Number(num))
  return sum
}