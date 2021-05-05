#!/usr/bin/env node
import askForGreeting from '../src/cli.js';
import welcome from '../src/welcome.js';
import even from '../src/games/even.js';
import config from '../config/even.js';

const main = () => {
  welcome();
  const name = askForGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const isCorrect = even(config.roundCount, config.range);

  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

main();
