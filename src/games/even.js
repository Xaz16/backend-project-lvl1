import readlineSync from 'readline-sync';
import checkAnswer from '../check-answer.js';
import prepareSamples from '../prepare-samples.js';

export default (roundCount, roundLength, evenRange = { min: 1, max: 100 }) => {
  const samples = prepareSamples(roundCount, roundLength, evenRange);

  let isLastAnswerCorrect = true;

  samples.forEach((sample) => {
    if (!isLastAnswerCorrect) {
      return false;
    }
    const answer = readlineSync.question(`Question: ${sample}\nYour answer: `);
    const correctAnswer = sample % 2 === 0 ? 'yes' : 'no';

    isLastAnswerCorrect = checkAnswer(answer, correctAnswer);
    return isLastAnswerCorrect;
  });

  return isLastAnswerCorrect;
};
