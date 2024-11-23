const fornecedoresModel = require("../models/fornecedoresModel");

const getAll = async (req, res) => {
  try {
    const fornecedores = await fornecedoresModel.getAllFornecedores();
    return res.status(200).json({ fornecedores });
  } catch (error) {
    console.error("Erro ao obter fornecedores:", error);
    return res
      .status(500)
      .json({ message: "Erro ao obter fornecedores", error: error.message });
  }
};

const createFornecedor = async (req, res) => {
  try {
    const createdFornecedor = await fornecedoresModel.createFornecedor(
      req.body
    );
    return res.status(201).json(createdFornecedor);
  } catch (error) {
    console.error("Erro ao criar fornecedor:", error);
    return res
      .status(500)
      .json({ message: "Erro ao criar fornecedor", error: error.message });
  }
};

const deleteFornecedor = async (req, res) => {
  const { id } = req.params;

  try {
    await fornecedoresModel.deleteFornecedor(id);
    return res.status(204).json({});
  } catch (error) {
    console.error("Erro ao deletar fornecedor:", error);
    return res
      .status(500)
      .json({ message: "Erro ao deletar fornecedor", error: error.message });
  }
};

const updateFornecedor = async (req, res) => {
  const { id } = req.params;
  const fornecedor = req.body;

  if (!fornecedor || Object.keys(fornecedor).length === 0) {
    return res.status(400).json({
      message: "Dados do fornecedor não fornecidos",
    });
  }

  try {
    const updatedFornecedor = await fornecedoresModel.updateFornecedor(
      id,
      fornecedor
    );

    if (updatedFornecedor.affectedRows === 0) {
      return res
        .status(404)
        .json({ msg: "Dados do fornecedor não encontrado" });
    }

    return res
      .status(200)
      .json({ msg: "Dados do fornecedor atualizados com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar fornecedor:", error);
    return res.status(500).json({
      msg: "erro ao atualizar o fornecedor",
      error: error.message,
    });
  }
};

module.exports = {
  getAll,
  createFornecedor,
  updateFornecedor,
  deleteFornecedor,
};
