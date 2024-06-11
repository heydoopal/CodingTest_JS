function solution(my_strings, parts) {
  let result = '';
  // 구조 분해 할당...
  for (let i = 0; i < my_strings.length; i++) {
    let [start, end] = parts[i];

    result += my_strings[i].slice(start, end + 1);
  }

  return result;
}
