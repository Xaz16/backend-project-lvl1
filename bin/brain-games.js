#!/usr/bin/env node
import askForGreeting from '../src/cli.js';
import welcome from '../src/welcome.js';

const main = () => {
  welcome();
  askForGreeting();
};

main();
