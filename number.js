const formatBrNumber = (value) => {
  const number = value || 0;
  return number.toLocaleString('pt-BR');
};

const formatEnNumber = (value) => {
  const number = value || 0;
  return number.toLocaleString('en-US');
};

const random = () => {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
};

const randomBetween = (minValue, maxValue) => {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

module.exports = { formatBrNumber, formatEnNumber, random, randomBetween };
