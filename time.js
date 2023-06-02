const formatSeconds = (value) => {
  const horas = Math.floor(value / 3600);
  const minutos = Math.floor((value % 3600) / 60);
  const segundosRestantes = value % 60;

  const horasFormatadas = horas < 10 ? '0' + horas : horas;
  const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
  const segundosFormatados =
    segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes;

  return horasFormatadas + ':' + minutosFormatados + ':' + segundosFormatados;
};

const daysBetweenDates = (date1, date2) => {
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);

  dt1.setHours(0, 0, 0, 0);
  dt2.setHours(0, 0, 0, 0);

  const diffMilissegundos = Math.abs(dt2 - dt1);

  const diffDias = Math.ceil(diffMilissegundos / (1000 * 60 * 60 * 24));

  return diffDias;
};

const monthsBetweenDates = (date1, date2) => {
  var dt1 = new Date(date1);
  var dt2 = new Date(date2);

  var diffMeses = (dt2.getFullYear() - dt1.getFullYear()) * 12;
  diffMeses += dt2.getMonth() - dt1.getMonth();

  return diffMeses;
};

module.exports = { formatSeconds, daysBetweenDates, monthsBetweenDates };
