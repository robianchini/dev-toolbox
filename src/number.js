const formatBrNumber = (value) => {
  return value.toLocaleString('pt-BR');
};

const formatEnNumber = (value) => {
  return value.toLocaleString('en-US');
};

const random = () => {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
};

const randomBetween = (minValue, maxValue) => {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

module.exports = { formatBrNumber, formatEnNumber, random, randomBetween };
