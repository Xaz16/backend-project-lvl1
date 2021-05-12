export default (min, max, fixed = true) => {
  const result = Math.random() * (max - min) + min;
  if (fixed) {
    return +result.toFixed(0);
  }

  return result;
};
