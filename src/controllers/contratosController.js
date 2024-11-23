const contratosModel = require("../models/contratosModel");

const getAll = async (req, res) => {
  try {
    const contratos = await contratosModel.getAllContratos();
    return res.status(200).json({ contratos });
  } catch (error) {
    console.error("Erro ao obter contratos:", error);
    return res
      .status(500)
      .json({ message: "Erro ao obter contratos", error: error.message });
  }
};

const createContrato = async (req, res) => {
  try {
    const createdContrato = await contratosModel.createContrato(req.body);
    return res.status(201).json({ createdContrato });
  } catch (error) {
    console.error("Erro ao criar contrato:", error);
    return res
      .status(500)
      .json({ message: "Erro ao criar contrato", error: error.message });
  }
};

const deleteContrato = async (req, res) => {
  const { id } = req.params;

  try {
    await contratosModel.deleteContrato(id);
    return res.status(204).json({});
  } catch (error) {
    console.error("Erro ao deletar contrato:", error);
    return res
      .status(500)
      .json({ message: "Erro ao deletar contrato", error: error.message });
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
    const updatedContrato = await contratosModel.updateContrato(id, contrato);

    if (updatedContrato.affectedRows === 0) {
      return res.status(404).json({
        message: "Contrato não encontrado",
      });
    }

    return res.status(200).json({
      message: "Contrato atualizado",
    });
  } catch (error) {
    console.error("Erro ao atualizar contrato:", error);
    return res
      .status(500)
      .json({ message: "Erro ao atualizar o contrato", error: error.message });
  }
};

module.exports = {
  getAll,
  createContrato,
  updateContrato,
  deleteContrato,
};