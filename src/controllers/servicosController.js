const servicosModel = require("../models/servicosModel");

const getAll = async (req, res) => {
  try {
    const servicos = await servicosModel.getAllServicos();
    return res.status(200).json({ servicos });
  } catch (error) {
    console.error("Erro ao obter serviços:", error);
    return res
      .status(500)
      .json({ message: "Erro ao obter serviços", error: error.message });
  }
};

const createServico = async (req, res) => {
  try {
    const createdServico = await servicosModel.createServico(req.body);
    return res.status(201).json(createdServico);
  } catch (error) {
    console.error("Erro ao criar serviço:", error);
    return res
      .status(500)
      .json({ message: "Erro ao criar serviço", error: error.message });
  }
};

const deleteServico = async (req, res) => {
  const { id } = req.params;

  try {
    await servicosModel.deleteServico(id);
    return res.status(204).json({});
  } catch (error) {
    console.error("Erro ao deletar serviço:", error);
    return res
      .status(500)
      .json({ message: "Erro ao deletar serviço", error: error.message });
  }
};

const updateServico = async (req, res) => {
  const { id } = req.params;
  const servico = req.body;

  if (!servico || Object.keys(servico).length === 0) {
    return res.status(400).json({
      message: "Dados do serviço não fornecidos",
    });
  }

  try {
    const updatedServico = await servicosModel.updateServico(id, servico);

    if (updatedServico.affectedRows === 0) {
      return res.status(404).json({ msg: "Dados do serviço não encontrado" });
    }

    return res
      .status(200)
      .json({ msg: "Dados do serviço atualizados com sucesso!" });
  } catch (error) {
    console.error("Erro ao atualizar serviço:", error);
    return res.status(500).json({
      msg: "erro ao atualizar o serviço",
      error: error.message,
    });
  }
};

module.exports = {
  getAll,
  createServico,
  updateServico,
  deleteServico,
};
