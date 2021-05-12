export default {
  roundCount: 3,
  roundLength: 2,
  operations: {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  },
  range: {
    min: 1,
    max: 100,
  },
};
