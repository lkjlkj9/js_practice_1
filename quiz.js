const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let count = 0;
rl.question('Как называется столица России?', function(capital) {
    let answer_one = 'Москва';
    if (capital.toLowerCase() == answer_one.toLowerCase()) count++;
    rl.question('31+2', function(num){
        let answer_two = 33;
       if (Number(num) == answer_two) count++;
        rl.question('AppleJack и Pinki...', function(pie) {
            let answer_three = 'Pie';
            if (pie.toLowerCase() == answer_three.toLowerCase()) count++;
            console.log(`Вы набрали ${count} из 3`);
            rl.close()
        })
    })
    })