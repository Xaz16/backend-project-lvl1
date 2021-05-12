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

  samples.forEach((sample) => {
    if (!isLastAnswerCorrect) {
      return false;
    }

    const unknownPosition = randomBetween(0, sample.length - 1);
    const correctAnswer = sample[unknownPosition];
    const sampleToShow = [...sample];
    sampleToShow[unknownPosition] = '..';

    const answer = readlineSync.question(`Question: ${sampleToShow.join(' ')}\nYour answer: `);

    isLastAnswerCorrect = checkAnswer(+answer, correctAnswer);
    return isLastAnswerCorrect;
  });

  return isLastAnswerCorrect;
};
