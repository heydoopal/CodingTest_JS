function solution(num_list, n) {
  let answer1 = num_list.slice(n);
  let answer2 = num_list.slice(0, n);
  return [...answer1, ...answer2];
}