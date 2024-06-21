function solution(number) {
  let sum = 0;
  for(let num of number){
    sum += +num
  }

  return sum % 9
}