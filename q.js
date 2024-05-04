const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter something: ', (answer,qwqw) => {
  console.log(`You entered: ${qwqw}`);

  rl.close();
});
