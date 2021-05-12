#!/usr/bin/env node
import progression from '../src/games/progression.js';
import config from '../config/progression.js';
import startGame from '../src/index.js';

const main = () => {
  console.log('What number is missing in the progression?');
  return progression(config.roundCount, config.roundLength, config.range);
};

startGame(main);
