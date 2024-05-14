// (1)반복문 사용
// for 반복문
// function solution(my_string) {
//   let answer = [];
//   for (let i = 0; i < my_string.length; i++) {
//     answer[i] = my_string[my_string.length - 1 - i];
//   }
//   return answer.join('');
// }

// (2) 메서드 사용
// my_string을 split으로 한글자씩 reverse 시키고 join('')하기?
const solution = (my_string) => my_string.split('').reverse().join('');
