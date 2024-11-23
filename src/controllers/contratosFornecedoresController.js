const contratosFornecedoresModel = require("../models/contratosFornecedoresModel");
const contratoService = require("../services/contratoService");

// GET CONTROLLERS

const getAll = async (req, res) => {
  try {
    const contratos = await contratosFornecedoresModel.getAllContratos();
    return res.status(200).json({ contratos });
  } catch (error) {
    console.error("Erro ao obter contratos com fornecedor:", error);
    return res
      .status(500)
      .json({
        message: "Erro ao obter contratos com fornecedor",
        error: error.message,
      });
  }
};

const obterDiasRestantes = async (req, res) => {
  const { id } = req.params;

  try {
    // Buscar o contrato no banco de dados
    const contrato = await contratosFornecedoresModel.getContratoById(id);

    if (!contrato) {
      return res.status(404).json({ message: "Contrato não encontrado" });
    }

    // Obter a data de fim do contrato
    const { data_fim } = contrato;

    // Usar o serviço para calcular os dias restantes
    const diasRestantes = contratoService.calcularDiasRestantes(data_fim);

    return res.status(200).json({ diasRestantes });
  } catch (error) {
    console.error(
      "Erro ao calcular os dias restantes do contrato com fornecedor:",
      error
    );
    return res.status(500).json({
      message: "Erro ao calcular os dias restantes",
      error: error.message,
    });
  }
};

// outros

const createContrato = async (req, res) => {
  try {
    const createdContrato = await contratosFornecedoresModel.createContrato(
      req.body
    );
    return res.status(201).json({ createdContrato });
  } catch (error) {
    console.error("Erro ao criar contrato com fornecedor:", error);
    return res
      .status(500)
      .json({
        message: "Erro ao criar contrato com fornecedor",
        error: error.message,
      });
  }
};

const deleteContrato = async (req, res) => {
  const { id } = req.params;

  try {
    await contratosFornecedoresModel.deleteContrato(id);
    return res.status(204).json({});
  } catch (error) {
    console.error("Erro ao deletar contrato com fornecedor:", error);
    return res
      .status(500)
      .json({
        message: "Erro ao deletar contrato com fornecedor",
        error: error.message,
      });
  }
};

const updateContrato = async (req, res) => {
  const { id } = req.params;
  const contrato = req.body;

  if (!contrato || Object.keys(contrato).length === 0) {
    return res.status(400).json({
      message: "Dados não fornecidos",
    });
  }
  try {
    const updatedContrato = await contratosFornecedoresModel.updateContrato(
      id,
      contrato
    );

    if (updatedContrato.affectedRows === 0) {
      return res.status(404).json({
        message: "Contrato com fornecedor não encontrado",
      });
    }

    return res.status(200).json({
      message: "Contrato com fornecedor atualizado",
    });
  } catch (error) {
    console.error("Erro ao atualizar contrato com fornecedor:", error);
    return res.status(500).json({
      message: "Erro ao atualizar o contrato com fornecedor",
      error: error.message,
    });
  }
};

module.exports = {
  getAll,
  obterDiasRestantes,
  createContrato,
  updateContrato,
  deleteContrato,
};
