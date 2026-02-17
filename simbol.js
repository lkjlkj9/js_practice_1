const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите символ', function(data) {
let symbol = data;
if ('0123456789'.includes(symbol)) {
    console.log("Цифра");
} 
else if ('abcdefghijklmnopqrstuvwxyz'.includes(symbol.toLowerCase())) {
    console.log("Буква");
}
else {console.log("Неизвестный символ");}

rl.close()
});
