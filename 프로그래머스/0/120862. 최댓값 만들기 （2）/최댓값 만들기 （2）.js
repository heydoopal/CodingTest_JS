
function solution(numbers) {
  numbers.sort((a, b) => a - b);

  let max1 = numbers[0]*numbers[1]
  let max2 = numbers[numbers.length-2]*numbers[numbers.length-1]
  
  return Math.max(max1, max2)
}