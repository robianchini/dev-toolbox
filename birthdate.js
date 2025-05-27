const isBirthDateValid = (birthDate) => {
  if (!birthDate) return;
  const day = birthDate.split('/')[0];
  const month = birthDate.split('/')[1];
  const year = birthDate.split('/')[2];

  const adultYear = moment().subtract(18, 'years').format('YYYY');

  if (day && month && year) {
    if (parseInt(day) < 1 || parseInt(day) > 31) {
      return false;
    }
    if (parseInt(month) < 1 || parseInt(month) > 12) {
      return false;
    }
    if (parseInt(year) < 1900 || parseInt(year) > adultYear) {
      return false;
    }

    return true;
  }
};

const formatBirthdate = (date) => {
  const [day, month, year] = date?.split('/');
  return `${year}-${month}-${day}`;
};

module.exports = { formatBirthdate, isBirthDateValid };
