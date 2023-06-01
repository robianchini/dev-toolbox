const formatCurrency = (value) => {
  const formattedValue = value || 0;

  if (isNaN(formattedValue)) return 'Não informado';

  return formattedValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

module.exports = { formatCurrency };
