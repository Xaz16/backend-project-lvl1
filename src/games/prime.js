import readlineSync from 'readline-sync';
import checkAnswer from '../check-answer.js';
import prepareSamples from '../prepare-samples.js';

export default (roundCount, roundLength, primeRange = { min: 6, max: 72 }, primes) => {
  let isLastAnswerCorrect = true;

  const samples = prepareSamples(roundCount, roundLength, primeRange);

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
