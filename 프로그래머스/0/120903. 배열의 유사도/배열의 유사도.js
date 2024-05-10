function solution(s1, s2) {
  let setArr = new Set(s2);
  return s1.filter((e) => setArr.has(e)).length;
}