const { resolve } = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let random = Math.round(Math.random()*50);

function ask(question) {
    return new Promise((resolve) => {
      rl.question(question, resolve);
    });
}

async function guessGame() {
  const random = Math.round(Math.random()*50);
  let attempts = 7;
  let previousGuess = null;

  console.log('Введите число от 1 до 50. У вас 7 попыток.');
    for (let i = 1; i <= attempts; i++) {
      const answer = await ask(`Попытка ${i}`);
      const guess = Number(answer);

      if (guess === random) {
        console.log("Правильно!");
        rl.close();
        return;        
      }

      if (guess < random) {
        console.log("Загаданное число БОЛЬШЕ");
      } else {
        console.log("Загаданное число МЕНЬШЕ");      
      }
      if (previousGuess !== null) {
        const curDiff = Math.abs(random - guess);
        const preDiff = Math.abs(random - previousGuess);

        if (curDiff < preDiff) {
        console.log("Уже близко");
        }
        else if (curDiff > preDiff) {
        console.log("Увы, дальше");
        }
        else {
        console.log("Не повторяйся))");
        }
      }
      previousGuess = guess;
    }
  console.log("Попытки закончились, ты молодец!");
  console.log(`Загаданное число: ${random}`);

  rl.close();
}

guessGame()