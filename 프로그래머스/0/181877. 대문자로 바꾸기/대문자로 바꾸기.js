function solution(myString) {
  // myStrings에 있는 문자중 소문자면 toUpperCase 시켜버릐기?
  return [...myString]
    .map((char) => (char !== char.toUpperCase() ? char.toUpperCase() : char))
    .join('');
}
