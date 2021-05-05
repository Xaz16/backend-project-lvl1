import askForGreeting from './cli.js';
import welcome from './welcome.js';

const byeMessages = {
  true: (name) => console.log(`Congratulations, ${name}!`),
  false: (name) => console.log(`Let's try again, ${name}!`),
  null: () => {},
};

export default (middle) => {
  welcome();
  const name = askForGreeting();
  const isCorrect = middle();
  const byeFn = byeMessages[isCorrect];
  byeFn(name);
};
