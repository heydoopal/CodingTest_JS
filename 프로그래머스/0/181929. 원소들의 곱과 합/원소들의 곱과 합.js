function solution(num_list) {
  let mul = 1;
  let sum = 0;
  let pow = 1;
  for (let i = 0; i < num_list.length; i++) {
    mul *= num_list[i];
    pow = Math.pow((sum += num_list[i]), 2);
  }

  return mul < pow ? 1 : 0;
}
