import readlineSync from 'readline-sync';
import prepareSamples from '../prepare-samples.js';

export default (roundCount, evenRange = { min: 1, max: 100 }) => {
  const samples = prepareSamples(roundCount, 1, evenRange);

  let isLastAnswerCorrect = true;

  for (const number of samples) {
    const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      isLastAnswerCorrect = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }

  return isLastAnswerCorrect;
};
