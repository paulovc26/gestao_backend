const connection = require("./connection");

const getAllClientes = async () => {
  const query = "SELECT * FROM tb_clientes;";
  const [clientes] = await connection.execute(query);
  return clientes;
};

// const getOneCliente = async (nome) => {
//   const query = "SELECT * FROM clientes WHERE nome = ?;";
//   const [cliente] = await connection.execute(query, [nome]);
//   return cliente;
// };

const createCliente = async (cliente) => {
  const { nome } = cliente;

  const query = "INSERT INTO tb_clientes(nome) VALUES (?)";

  const [createdCliente] = await connection.execute(query, [nome]);

  return createdCliente;
};

const deleteCliente = async (id) => {
  const query = "DELETE FROM tb_clientes WHERE id = ?";
  const removeCliente = await connection.execute(query, [id]);
  return removeCliente;
};

const updateCliente = async (id, cliente) => {
  const query = "UPDATE tb_clientes SET nome = ? where id = ?;";
  const { nome } = cliente;

  const updatedCliente = await connection.execute(query, [nome, id]);
  return updatedCliente;
};

module.exports = {
  getAllClientes,
  createCliente,
  deleteCliente,
  updateCliente,
};
