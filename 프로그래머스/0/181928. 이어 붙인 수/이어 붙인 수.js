function solution(num_list) {
  let odd = '';
  let even = '';
  num_list.map((num) =>
    num % 2 === 0 ? (even += num + '') : (odd += num + '')
  );
  return +even + +odd;
}
