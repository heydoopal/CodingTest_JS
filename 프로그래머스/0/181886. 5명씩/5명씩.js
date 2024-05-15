function solution(names) {
  let answer = [];
  // names의 인덱스가 0 이후로는 다 5의 배수임
  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }
  return answer
}
