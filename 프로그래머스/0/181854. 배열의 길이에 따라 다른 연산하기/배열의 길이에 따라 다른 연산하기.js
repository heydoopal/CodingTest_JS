function solution(arr, n) {
  let isOdd = arr.length % 2 !== 0;

  for (i = isOdd ? 0 : 1; i < arr.length; i += 2) {
    arr[i] += n;
  }

  return arr;
}