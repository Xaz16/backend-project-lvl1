import readlineSync from 'readline-sync';
import randomBetween from '../random.js';

export default (roundCount, operations, calcRange = { min: 1, max: 100 }) => {
  const { min, max } = calcRange;
  let isLastAnswerCorrect = true;
  const samples = Array(roundCount)
    .fill(null)
    .map(() => [
      +randomBetween(min, max).toFixed(0),
      +randomBetween(min, max).toFixed(0),
    ]);

  for (const sample of samples) {
    const operationsKeys = Object.keys(operations);
    const opertaionKeyIndex = randomBetween(
      0,
      operationsKeys.length - 1,
    ).toFixed(0);
    const opertaionKey = operationsKeys[opertaionKeyIndex];

    const currentOperationFn = operations[opertaionKey];

    const correctAnswer = currentOperationFn(...sample);

    const answer = readlineSync.question(
      `Question: ${sample.join(` ${opertaionKey} `)}\nYour answer: `,
    );

    if (+answer === correctAnswer) {
      console.log('Correct!');
    } else {
      isLastAnswerCorrect = false;
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      break;
    }
  }

  return isLastAnswerCorrect;
};
