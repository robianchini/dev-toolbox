const formatZipCode = (value) => {
  if (!value) return 'Não informado';

  const cep = String(value);
  return `${cep.substring(0, 2)}.${cep.substring(2, 5)}-${cep.substring(5, 8)}`;
};

const isZipCodeValid = (value) => {
  const cep = String(value);

  if (cep.length !== 8) {
    return false;
  }

  return /^\d+$/.test(cep);
};

module.exports = { formatZipCode, isZipCodeValid };
