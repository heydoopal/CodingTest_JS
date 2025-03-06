const solution = (numbers) => {
  let ans = numbers.reduce((acc, cur) => acc + cur);
  return ans / numbers.length;
};
