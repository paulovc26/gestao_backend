const validateCpfCnpj = (req, res, next) => {
  const { body } = req;
  let cpf_cnpj = body.cpf_cnpj.trim(); // Remove espaços extras

  // Verifique se o valor é numérico
  if (!/^\d+$/.test(cpf_cnpj)) {
    return res
      .status(411)
      .json({ message: "CPF ou CNPJ deve conter apenas números." });
  }

  // Verifica se o comprimento do CPF (11 dígitos) ou CNPJ (14 dígitos) estão corretos
  if (cpf_cnpj.length !== 11 && cpf_cnpj.length !== 14) {
    return res.status(411).json({
      message: "CPF precisa ter 11 dígitos ou CNPJ precisa ter 14 dígitos.",
    });
  }

  next(); // Passa para o próximo middleware ou controlador
};

module.exports = {
  validateCpfCnpj,
};
