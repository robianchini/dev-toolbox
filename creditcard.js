const formatCreditCard = (value) => {
  const digitsOnly = String(value).replace(/\D/g, '');
  if (!digitsOnly) return 'Formato inválido';
  const groups = digitsOnly.match(/(\d{1,4})/g);
  const formatted = groups.join(' ');
  return formatted;
};

const getCardFlagName = (cardNumber) => {
  const firstNumbers = cardNumber.slice(0, 2);
  if (!firstNumbers) return 'Formato inválido';
  if (firstNumbers[0] === '4') return 'Visa';
  if (firstNumbers[0] === '5') return 'Mastercard';
  if (firstNumbers === '36' || firstNumbers === '38') return 'Dinners Club';
  if (firstNumbers === '34' || firstNumbers === '37') return 'American Express';
};

module.exports = { formatCreditCard, getCardFlagName };
