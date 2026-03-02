const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let correctPassword = "1234";
let attempts = 0;

function askPassword() {
    rl.question('Введите пароль: ', function(pass) {
    attempts++;
        if (pass === correctPassword) {
      console.log("Доступ разрешён");
      rl.close();
    } 
        else {
      console.log("Доступ запрещён");

      if (attempts < 3) {
        askPassword(); // вызываем снова
      } else {
        console.log("Попытки закончились");
        rl.close();
      }}
  })
}

askPassword();
