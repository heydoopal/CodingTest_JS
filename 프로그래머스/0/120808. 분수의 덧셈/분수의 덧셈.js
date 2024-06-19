function solution(numer1, denom1, numer2, denom2) {
  // 최대공약수 구하기
  const gcd =  (a, b) => {
    return a % b === 0 ? b : gcd(b, a % b)
  }
  
  // 최소공배수 구하기
  const lcm = (a, b) => {
    return a * b / gcd(a, b)
  }

  // 공통 분모
  let commonDenom = lcm(denom1, denom2)  

  // 분자를 분모에 맞게 
  let num1 = (commonDenom / denom1 )* numer1
  let num2 = (commonDenom / denom2 )* numer2

  // 두 분수 분자 더하기
  let sumNumer = num1 + num2;

  // 기약분수
  let result = gcd(sumNumer, commonDenom)
  return [sumNumer/result , commonDenom/result]
}