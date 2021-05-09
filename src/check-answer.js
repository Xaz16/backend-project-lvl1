export default (answer, correctAnswer, log = console.log) => {
  const isAnswerCorrect = answer === correctAnswer;
  const message = isAnswerCorrect
    ? 'Correct!'
    : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

  log(message);

  return isAnswerCorrect;
};
