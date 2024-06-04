function solution(n_str) {
  let index = 0;
  for(index = 0; index<n_str.length; index++){
    if(n_str[index] !== '0') break;
  }
  return n_str.slice(index)
}
