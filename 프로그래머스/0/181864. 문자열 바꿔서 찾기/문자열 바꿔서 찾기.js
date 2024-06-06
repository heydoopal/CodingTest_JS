function solution (myString, pat) {
  let answer = ''
  for(let i =0; i<myString.length; i++){
    answer += myString[i] === 'A' ? 'B' : 'A'
  }

  return +(answer.includes(pat))
}