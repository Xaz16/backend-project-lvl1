import readlineSync from 'readline-sync';
import checkAnswer from '../check-answer.js';
import prepareSamples from '../prepare-samples.js';

export default (roundCount, primeRange = { min: 6, max: 72 }) => {
  let isLastAnswerCorrect = true;

  const primes = [7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
  const samples = prepareSamples(roundCount, 1, primeRange);

  for (const sample of samples) {
    if (!isLastAnswerCorrect) {
      break;
    }

    const correctAnswer = primes.indexOf(sample[0]) === -1 ? 'no' : 'yes';
    const answer = readlineSync.question(`Question: ${sample.join(' ')}\nYour answer: `);

    isLastAnswerCorrect = checkAnswer(answer, correctAnswer);
  }

  return isLastAnswerCorrect;
};
