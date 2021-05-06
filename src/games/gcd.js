import readlineSync from 'readline-sync';
import randomBetween from '../random.js';
import getGcd from '../getGcd.js';

export default (roundCount, gcdRange = { min: 1, max: 100 }) => {
  const { min, max } = gcdRange;
  let isLastAnswerCorrect = true;
  const samples = Array(roundCount)
    .fill(null)
    .map(() => [
      +randomBetween(min, max).toFixed(0),
      +randomBetween(min, max).toFixed(0),
    ]);

  for (const sample of samples) {
    const correctAnswer = getGcd(...sample);

    const answer = readlineSync.question(
      `Question: ${sample.join(' ')}\nYour answer: `,
    );

    if (+answer === correctAnswer) {
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
