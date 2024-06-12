function solution(myString) {
  return [...myString]
    .map((str) => {
      return str.toUpperCase() === 'A' ? str.toUpperCase() : str.toLowerCase();
    })
    .join('');
}
