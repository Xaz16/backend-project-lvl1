#!/usr/bin/env node
import gcd from '../src/games/gcd.js';
import config from '../config/gcd.js';
import startGame from '../src/index.js';

const main = () => {
  console.log('Find the greatest common divisor of given numbers.');
  return gcd(config.roundCount, config.range);
};

startGame(main);
