const formatCPF = (value) => {
  if (!value) return 'Não informado';

  const cpf = String(value);
  if (!cpf) return '';
  return cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
};

const formatCNPJ = (value) => {
  if (!value) return 'Não informado';

  const cnpj = String(value).slice(0, 14);
  if (!cnpj) return '';
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
};

const formatDocument = (value) => {
  if (!value) return 'Não informado';

  const document = String(value);
  if (!document) return '';
  if (document.length < 14) {
    return formatCPF(document);
  }
  return formatCNPJ(document);
};

const isCPFValid = (value) => {
  const cpf = String(value).replace(/\D/g, '');

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  let soma = 0;
  let resto;

  let i = 1;
  for (const char of cpf) {
    if (i > 9) break;
    soma += parseInt(char) * (11 - i);
    i++;
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.charAt(9))) {
    return false;
  }

  soma = 0;
  i = 1;
  for (const char of cpf) {
    if (i > 10) break;
    soma += parseInt(char) * (12 - i);
    i++;
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
};

const isCNPJValid = (value) => {
  const cnpj = String(value).replace(/\D/g, '');
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) {
    return false; // Verifica se o CNPJ possui 14 dígitos ou se todos os dígitos são iguais
  }

  const calcularDigitoVerificador = (digitos, pesoInicial) => {
    let soma = 0;
    let peso = pesoInicial;

    for (const digito of digitos) {
      soma += parseInt(digito) * peso;
      peso = peso === 2 ? 9 : peso - 1;
    }

    const resto = soma % 11;
    const digitoVerificador = resto < 2 ? 0 : 11 - resto;
    return digitoVerificador;
  };

  const digitos = cnpj.slice(0, -2);
  const digitoVerificador1 = calcularDigitoVerificador(digitos, 5);
  const digitoVerificador2 = calcularDigitoVerificador(
    digitos + digitoVerificador1,
    6
  );

  return (
    parseInt(cnpj.charAt(12)) === digitoVerificador1 &&
    parseInt(cnpj.charAt(13)) === digitoVerificador2
  );
};

const isDocumentValid = (value) => {
  const document = String(value).replace(/\D/g, '');

  if (!document) return '';

  if (document.length === 14 && isCNPJValid(document)) return true;
  if (document.length === 11 && isCPFValid(document)) return true;
  return false;
};

module.exports = {
  formatCPF,
  formatCNPJ,
  formatDocument,
  isCPFValid,
  isCNPJValid,
  isDocumentValid,
};
