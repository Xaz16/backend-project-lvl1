import readlineSync from 'readline-sync';
import getGcd from '../getGcd.js';
import prepareSamples from '../prepare-samples.js';

export default (roundCount, gcdRange = { min: 1, max: 100 }) => {
  let isLastAnswerCorrect = true;
  const samples = prepareSamples(roundCount, 2, gcdRange);

  for (const sample of samples) {
    const correctAnswer = getGcd(...sample);

    const answer = readlineSync.question(`Question: ${sample.join(' ')}\nYour answer: `);

    if (+answer === correctAnswer) {
      console.log('Correct!');
    } else {
      isLastAnswerCorrect = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }

  return isLastAnswerCorrect;
};
