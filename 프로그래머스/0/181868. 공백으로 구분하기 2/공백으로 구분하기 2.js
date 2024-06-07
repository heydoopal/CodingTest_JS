function solution(my_string) {
  let result = [];
  let word = '';
  
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== ' ') {
      word += my_string[i];
    } else {
      if (word.length > 0) {
        result.push(word);
        word = '';
      }
    }
  }

  if (word.length > 0) {
    result.push(word);
  }

  return result;
}
