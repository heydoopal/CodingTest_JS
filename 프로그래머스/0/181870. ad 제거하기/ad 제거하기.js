function solution(strArr) {
  let answerArr = [];
  for (let str of strArr) {
    if (!str.includes('ad')) {
      answerArr.push(str);
    }
  }
  return answerArr;
}
