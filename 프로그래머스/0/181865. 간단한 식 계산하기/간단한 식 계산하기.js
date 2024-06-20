function solution(binomial) {
  
  // const num1 = binomial.split(' ')[0] * 1
  // const num2 = binomial.split(' ')[2] * 1
  // const op = binomial.split(' ')[1]
  // 여러번 split 반복하지말고 구조 할당해서 한 번만 호출하기
  const [num1, op, num2] = binomial.split(' ')
  
  const a = parseInt(num1)
  const b = parseInt(num2)


  switch(op){
    case '+':
      return a + b;
      // break;  return 뒤에 있으므로 break 생략해도 됨
    case '-':
      return a - b;
    case '*':
      return a * b;
  }
}