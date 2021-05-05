#!/usr/bin/env node
import even from '../src/games/even.js';
import config from '../config/even.js';
import startGame from '../src/index.js';

const main = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return even(config.roundCount, config.range);
};

startGame(main);
