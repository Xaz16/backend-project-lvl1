#!/usr/bin/env node
import askForGreeting from '../src/cli.js';
import welcome from '../src/welcome.js';
import calc from '../src/games/calc.js';
import config from '../config/calc.js';

const main = () => {
  welcome();
  const name = askForGreeting();
  console.log('What is the result of the expression?');
  const isCorrect = calc(config.roundCount, config.operations, config.range);

  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

main();
