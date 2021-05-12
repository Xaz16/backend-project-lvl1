import randomBetween from './random.js';

export default (samplesCount, sampleItemsCount, { min, max }) => Array(samplesCount)
  .fill(null)
  .map(() => Array(sampleItemsCount).fill(null).map(() => randomBetween(min, max)));
