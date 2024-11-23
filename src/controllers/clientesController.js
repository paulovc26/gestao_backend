const clientesModel = require("../models/clientesModel");

const getAll = async (req, res) => {
  const clientes = await clientesModel.getAllClientes();
  return res.status(200).json({ clientes });
};

// const getOne = async (req, res) => {
//   const cargo = await clientesModel.getOneCargo();
//   return res.status(200).json({ cargo });
// };

const createCliente = async (req, res) => {
  const createdCliente = await clientesModel.createCliente(req.body);
  return res.status(201).json(createdCliente);
};

const deleteCliente = async (req, res) => {
  const { id } = req.params;

  await clientesModel.deleteCliente(id);

  return res.status(204).json({});
};

const updateCliente = async (req, res) => {
  const { id } = req.params;

  await clientesModel.updateCliente(id, req.body);

  return res.status(204).json({});
};

module.exports = {
  getAll,
  createCliente,
  updateCliente,
  deleteCliente,
};
