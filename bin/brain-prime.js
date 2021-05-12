#!/usr/bin/env node
import prime from '../src/games/prime.js';
import config from '../config/prime.js';
import startGame from '../src/index.js';

const main = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  return prime(config.roundCount, config.roundLength, config.range, config.primes);
};

startGame(main);
