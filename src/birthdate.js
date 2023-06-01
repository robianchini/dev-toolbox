const isBirthDateValid = (birthDate) => {
  if (!birthDate) return;
  const [day, month, year] = birthDate?.split('/');

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
