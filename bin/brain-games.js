#!/usr/bin/env node
import askForGreeting from '../src/cli.js';

const main = () => {
  console.log('Welcome to the Brain Games!');

  askForGreeting();
};

main();
