function solution(my_string) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  return [...my_string].filter((item) => !vowels.has(item)).join('');
}