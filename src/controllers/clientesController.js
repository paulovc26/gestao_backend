const clientesModel = require("../models/clientesModel");

const getAll = async (req, res) => {
  try {
    const clientes = await clientesModel.getAllClientes();
    return res.status(200).json({ clientes });
  } catch (error) {
    console.error("Erro ao obter clientes:", error);
    return res
      .status(500)
      .json({ message: "Erro ao obter clientes", error: error.message });
  }
};

const createCliente = async (req, res) => {
  try {
    const createdCliente = await clientesModel.createCliente(req.body);
    return res.status(201).json(createdCliente);
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    return res
      .status(500)
      .json({ message: "Erro ao criar cliente", error: error.message });
  }
};

const deleteCliente = async (req, res) => {
  const { id } = req.params;

  try {
    await clientesModel.deleteCliente(id);
    return res.status(204).json({});
  } catch (error) {
    console.error("Erro ao deletar cliente:", error);
    return res
      .status(500)
      .json({ message: "Erro ao deletar cliente", error: error.message });
  }
};

const updateCliente = async (req, res) => {
  const { id } = req.params;
  const cliente = req.body;

  if (!cliente || Object.keys(cliente).length === 0) {
    return res.status(400).json({
      message: "Dados do cliente não fornecidos",
    });
  }

  try {
    const updatedCliente = await clientesModel.updateCliente(id, cliente);

    if (updatedCliente.affectedRows === 0) {
      return res.status(404).json({ msg: "Dados do cliente não encontrado" });
    }

    return res
      .status(200)
      .json({ msg: "Dados do cliente atualizados com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar cliente:", error);
    return res.status(500).json({
      msg: "erro ao atualizar o cliente",
      error: error.message,
    });
  }
};

module.exports = {
  getAll,
  createCliente,
  updateCliente,
  deleteCliente,
};
