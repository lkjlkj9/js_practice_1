const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите числа', function(num) {
    let numbers = num.split('');
    console.log(numbers.reverse().join(''));
    rl.close()
});