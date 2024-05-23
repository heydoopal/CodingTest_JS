const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0].split('');

  str.forEach((char, index) =>
    char === char.toUpperCase()
      ? (str[index] = char.toLowerCase())
      : (str[index] = char.toUpperCase())
  );
  console.log(str.join(''));
});

