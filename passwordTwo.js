const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkPassword(pass) {
    return (
        pass.length >= 6 &&
        pass.length <= 20 &&
        /[0-9]/.test(pass) &&
        /[A-Z]/.test(pass) &&
        /[!@#$%^&*]/.test(pass) )
        ? "Пароль надёжный"
        : "Пароль слабый";
};

rl.question('Введите пароль:', function(pass) {
    console.log(checkPassword(pass));
    rl.close()
});