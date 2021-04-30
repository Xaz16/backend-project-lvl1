import readlineSync from 'readline-sync';
import randomBetween from './random.js';

export default (roundCount, evenRange = { min: 1, max: 100 }) => {
  const { min, max } = evenRange;
  const numbers = Array(roundCount)
    .fill(null)
    .map(() => +randomBetween(min, max).toFixed(0));
  let isLastAnswerCorrect = true;

  for (const number of numbers) {
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      isLastAnswerCorrect = false;
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      break;
    }
  }

  return isLastAnswerCorrect;
};
