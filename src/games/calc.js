import readlineSync from 'readline-sync';
import randomBetween from '../random.js';
import prepareSamples from '../prepare-samples.js';
import checkAnswer from '../check-answer.js';

export default (roundCount, roundLength, operations, calcRange = { min: 1, max: 100 }) => {
  let isLastAnswerCorrect = true;
  const samples = prepareSamples(roundCount, roundLength, calcRange);

  for (const sample of samples) {
    if (!isLastAnswerCorrect) {
      break;
    }
    const operationsKeys = Object.keys(operations);
    const opertaionKeyIndex = randomBetween(0, operationsKeys.length - 1);
    const opertaionKey = operationsKeys[opertaionKeyIndex];

    const currentOperationFn = operations[opertaionKey];

    const correctAnswer = currentOperationFn(...sample);

    const answer = readlineSync.question(
      `Question: ${sample.join(` ${opertaionKey} `)}\nYour answer: `,
    );

    isLastAnswerCorrect = checkAnswer(+answer, correctAnswer);
  }

  return isLastAnswerCorrect;
};
