function solution(num_list) {
  let arr = num_list.slice(-2);
  arr[1] > arr[0] ? num_list.push(arr[1] - arr[0]) : num_list.push(arr[1] * 2);
  return num_list;
}
