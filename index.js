const {
  orderArray,
  orderNumericArray,
  orderObjectArray,
} = require('./src/array');
const { formatBirthdate, isBirthDateValid } = require('./src/birthdate');
const { formatCurrency } = require('./src/currency');
const {
  formatCPF,
  isCPFValid,
  formatCNPJ,
  isCNPJValid,
} = require('./src/document');
const { greeting } = require('./src/greeting');
const {
  formatBrNumber,
  formatEnNumber,
  random,
  randomBetween,
} = require('./src/number');
const { formatPhone } = require('./src/phone');
const { formatPlate, isPlateValid } = require('./src/vehicle');
const { formatZipCode, isZipCodeValid } = require('./src/zipcode');

module.exports = {
  orderArray,
  orderNumericArray,
  orderObjectArray,
  formatBirthdate,
  isBirthDateValid,
  formatCurrency,
  formatCPF,
  isCPFValid,
  formatCNPJ,
  isCNPJValid,
  greeting,
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
