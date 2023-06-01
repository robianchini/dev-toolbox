const formatPlate = (value) => {
  if (!value) return 'Não informado';

  const regexPlate = /^[a-zA-Z]{3}[0-9]{4}$/;
  if (regexPlate.test(value))
    return `${value.substr(0, 3)}-${value.substr(3)}`.toUpperCase();
  return value.toUpperCase();
};

const isPlateValid = (value) => {
  const padraoPlaca = /^[A-Za-z]{3}\d[A-Za-z\d]\d{2}$/;

  const placa = String(value)
    .replace(/[^a-zA-Z0-9]/g, '')
    .toUpperCase();

  return padraoPlaca.test(placa);
};

module.exports = { formatPlate, isPlateValid };
