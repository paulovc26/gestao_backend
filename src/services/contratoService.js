const calcularDiasRestantes = (dataFim) => {
  const dataHoje = new Date();
  const dataFimContrato = new Date(dataFim);

  const diferencaMs = dataFimContrato - dataHoje;

  const diasRestantes = Math.ceil(diferencaMs / (1000 * 3600 * 24));

  if (diasRestantes <= 0) {
    return "vencido";
  }

  return diasRestantes;
};

module.exports = {
  calcularDiasRestantes,
};
