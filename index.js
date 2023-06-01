const { orderArray, orderNumericArray, orderObjectArray } = require('./array');
const { formatBirthdate, isBirthDateValid } = require('./birthdate');
const { getCardFlagName, formatCreditCard } = require('./creditcard');
const { formatCurrency } = require('./currency');
const {
  formatCPF,
  isCPFValid,
  formatCNPJ,
  isCNPJValid,
} = require('./document');
const { greeting, getGreeting } = require('./greeting');
const {
  formatBrNumber,
  formatEnNumber,
  random,
  randomBetween,
} = require('./number');
const { formatPhone } = require('./phone');
const { formatPlate, isPlateValid } = require('./vehicle');
const { formatZipCode, isZipCodeValid } = require('./zipcode');

module.exports = {
  orderArray,
  orderNumericArray,
  orderObjectArray,
  formatBirthdate,
  isBirthDateValid,
  getCardFlagName,
  formatCreditCard,
  formatCurrency,
  formatCPF,
  isCPFValid,
  formatCNPJ,
  isCNPJValid,
  greeting,
  getGreeting,
  formatBrNumber,
  formatEnNumber,
  random,
  randomBetween,
  formatPhone,
  formatPlate,
  isPlateValid,
  formatZipCode,
  isZipCodeValid,
};
