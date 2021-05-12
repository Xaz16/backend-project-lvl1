import readlineSync from 'readline-sync';
import checkAnswer from '../check-answer.js';
import getGcd from '../getGcd.js';
import prepareSamples from '../prepare-samples.js';

export default (roundCount, roundLength, gcdRange = { min: 1, max: 100 }) => {
  let isLastAnswerCorrect = true;
  const samples = prepareSamples(roundCount, roundLength, gcdRange);

  samples.forEach((sample) => {
    if (!isLastAnswerCorrect) {
      return false;
    }
    const correctAnswer = getGcd(...sample);
    const answer = readlineSync.question(`Question: ${sample.join(' ')}\nYour answer: `);

    isLastAnswerCorrect = checkAnswer(+answer, correctAnswer);

    return isLastAnswerCorrect;
  });

  return isLastAnswerCorrect;
};
