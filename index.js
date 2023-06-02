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
const {
  mToKm,
  mToCm,
  mToMm,
  mToIn,
  mToFt,
  mToMi,
  inToM,
  inToKm,
  inToCm,
  inToMm,
  inToFt,
  inToMi,
  ftToM,
  ftToKm,
  ftToCm,
  ftToMm,
  ftToFt,
  ftToMi,
} = require('./length');
const { greeting, getGreeting } = require('./greeting');
const {
  formatBrNumber,
  formatEnNumber,
  random,
  randomBetween,
} = require('./number');
const { formatPhone } = require('./phone');
const {
  formatSeconds,
  daysBetweenDates,
  monthsBetweenDates,
} = require('./time');
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
  mToKm,
  mToCm,
  mToMm,
  mToIn,
  mToFt,
  mToMi,
  inToM,
  inToKm,
  inToCm,
  inToMm,
  inToFt,
  inToMi,
  ftToM,
  ftToKm,
  ftToCm,
  ftToMm,
  ftToFt,
  ftToMi,
  greeting,
  getGreeting,
  formatBrNumber,
  formatEnNumber,
  random,
  randomBetween,
  formatPhone,
  formatSeconds,
  daysBetweenDates,
  monthsBetweenDates,
  formatPlate,
  isPlateValid,
  formatZipCode,
  isZipCodeValid,
};
