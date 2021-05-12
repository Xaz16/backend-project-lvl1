import readlineSync from 'readline-sync';

export default (log = console.log) => {
  const name = readlineSync.question('May I have your name? ');
  log(`Hello, ${name}!`);
  return name;
};
