#!/usr/bin/env node
import calc from '../src/games/calc.js';
import config from '../config/calc.js';
import startGame from '../src/index.js';

const main = () => {
  console.log('What is the result of the expression?');
  return calc(config.roundCount, config.roundLength, config.operations, config.range);
};

startGame(main);
