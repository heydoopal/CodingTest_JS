function solution(arr, intervals) {
  let ans1 = arr.slice(intervals[0][0], intervals[0][1] + 1);
  let ans2 = arr.slice(intervals[1][0], intervals[1][1] + 1);

  return [...ans1, ...ans2];
}