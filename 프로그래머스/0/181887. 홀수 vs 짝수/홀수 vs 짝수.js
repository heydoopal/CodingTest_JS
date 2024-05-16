function solution(num_list) {
  let evenSum = 0;
  let oddSum = 0;

  num_list.forEach((element, index) =>
    index % 2 === 0 ? (oddSum += element) : (evenSum += element)
  );
  return Math.max(evenSum, oddSum);
}
