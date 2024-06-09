function solution(strArr) {
  return strArr.map((str, idx) => {
    return idx % 2 !==0 
    ? strArr[idx] = str.toUpperCase()
    : strArr[idx] = str.toLowerCase()
    
  })
}