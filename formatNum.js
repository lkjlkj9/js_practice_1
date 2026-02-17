const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите число и разделитель', function(string) {
    let str = string.split('');
    let symbol = str.pop();
    console.log(str.join(symbol));
    rl.close()
})