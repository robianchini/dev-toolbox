const greeting = (datetime) => {
  const day = datetime ? new Date(datetime) : new Date();
  const now = day.getHours();

  const periods = {
    default: {
      message: 'Bem-vindo',
    },
    morning: {
      message: 'Bom dia',
    },
    afternoon: {
      message: 'Boa tarde',
    },
    night: {
      message: 'Boa noite',
    },
    dawn: {
      message: 'Bom dia',
    },
  };

  let greeting;

  if (now < 6 && now >= 0) greeting = 'dawn';
  else if (now >= 6 && now < 12) greeting = 'morning';
  else if (now >= 12 && now < 18) greeting = 'afternoon';
  else if (now >= 18) greeting = 'night';

  return periods[greeting].message;
};

module.exports = { greeting };
