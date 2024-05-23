function solution(s) {
  let p = 0;
  let y = 0;
  for (let char of s.toLowerCase()) {
    if (char === 'p') {
      p++;
    }
    if (char === 'y') {
      y++;
    }
  }
  return p === y ? true : false;
}
