const formatPhone = (value) => {
  if (!value) return 'Não informado';

  const phone = String(value);

  if (phone.length === 8) {
    const isFourThousand =
      phone.substring(0, 4) === '4004' || phone.substring(0, 4) === '4003';
    if (isFourThousand)
      return `${phone.substring(0, 4)} ${phone.substring(4, 8)}`;
    if (!isFourThousand)
      return `${phone.substring(0, 4)}-${phone.substring(4, 8)}`;
  }

  if (phone.length === 9) {
    return `${phone.substring(0, 5)}-${phone.substring(5)}`;
  }

  if (phone.length === 10) {
    return `(${phone.substring(0, 2)}) ${phone.substring(
      2,
      6
    )}-${phone.substring(6)}`;
  }

  if (phone.length === 11) {
    const isZeroEight = phone.substring(0, 4) === '0800';
    if (isZeroEight)
      return `${phone.substring(0, 4)} ${phone.substring(
        4,
        7
      )} ${phone.substring(7, 11)}`;
    if (!isZeroEight)
      return `${phone.substring(0, 2)} ${phone.substring(
        2,
        7
      )}-${phone.substring(7, 11)}`;
  }

  if (phone.length === 13) {
    const isInternational = phone.substring(0, 3) === '+55';
    if (isInternational)
      return `${phone.substring(0, 3)} ${phone.substring(
        3,
        5
      )} ${phone.substring(5, 9)}-${phone.substring(9, 13)}`;
  }

  if (phone.length === 14) {
    const isInternational = phone.substring(0, 3) === '+55';
    if (isInternational)
      return `${phone.substring(0, 3)} ${phone.substring(
        3,
        5
      )} ${phone.substring(5, 10)}-${phone.substring(10, 15)}`;
  }
};

module.exports = { formatPhone };
