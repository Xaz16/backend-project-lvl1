import readlineSync from 'readline-sync';
import checkAnswer from '../check-answer.js';
import prepareSamples from '../prepare-samples.js';

export default (roundCount, evenRange = { min: 1, max: 100 }) => {
  const samples = prepareSamples(roundCount, 1, evenRange);

  let isLastAnswerCorrect = true;

  for (const number of samples) {
    if (!isLastAnswerCorrect) {
      break;
    }
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    isLastAnswerCorrect = checkAnswer(answer, correctAnswer);
  }

  return isLastAnswerCorrect;
};
