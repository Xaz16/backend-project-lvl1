import readlineSync from 'readline-sync';
import randomBetween from '../random.js';
import prepareSamples from '../prepare-samples.js';
import checkAnswer from '../check-answer.js';

export default (roundCount, roundLength, progressionRange = { min: 1, max: 10 }) => {
  let isLastAnswerCorrect = true;

  const samples = prepareSamples(roundCount, roundLength, progressionRange).map((item) => {
    const baseOfProgression = randomBetween(progressionRange.min, progressionRange.max);
    return item.map((childItem, childIndex) => baseOfProgression + childIndex * baseOfProgression);
  });

  for (const sample of samples) {
    if (!isLastAnswerCorrect) {
      break;
    }

    const unknownPosition = randomBetween(0, sample.length - 1);
    const correctAnswer = sample[unknownPosition];
    sample[unknownPosition] = '..';

    const answer = readlineSync.question(`Question: ${sample.join(' ')}\nYour answer: `);

    isLastAnswerCorrect = checkAnswer(+answer, correctAnswer);
  }

  return isLastAnswerCorrect;
};
