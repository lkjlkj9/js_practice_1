const readline = require('readline');

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите число', function(num){
    let numbers = num.split('').map(Number);
    console.log(numbers.reduce((sum, x) => sum + x, 0));
    rl.close()
})