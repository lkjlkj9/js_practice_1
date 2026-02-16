
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fizzBuzz(number) {
    let result = '';
    if (number % 3 == 0) result += 'Fizz';
    if (number % 5 == 0) result += 'Buzz';

    return result || 'Ничего'
    }

rl.question('Введите число от 1 до 100', function(data) {
    let num = Number(data);
    if (num >= 1 && num <= 100) {
        console.log(fizzBuzz(num))
    }
    else {
        console.log('Введите число от 1 до 100')
    }

    rl.close();
});