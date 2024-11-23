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
  const { nome, cpf_cnpj } = cliente;

  const query = "INSERT INTO tb_clientes(nome, cpf_cnpj) VALUES (?, ?)";

  const [createdCliente] = await connection.execute(query, [nome, cpf_cnpj]);

  return createdCliente;
};

const deleteCliente = async (id) => {
  const query = "DELETE FROM tb_clientes WHERE id = ?";
  const removeCliente = await connection.execute(query, [id]);
  return removeCliente;
};

const updateCliente = async (id, cliente) => {
  const fields = [];
  const values = [];

  if (cliente.nome !== undefined) {
    fields.push("nome = ?");
    values.push(cliente.nome);
  }
  if (cliente.cpf_cnpj !== undefined) {
    fields.push("cpf_cnpj = ?");
    values.push(cliente.cpf_cnpj);
  }

  values.push(id);

  const query = `UPDATE tb_clientes
    SET ${fields.join(", ")}
    where id = ?;
    `;

  const [updatedCliente] = await connection.execute(query, values);

  return updatedCliente;
};

module.exports = {
  getAllClientes,
  createCliente,
  deleteCliente,
  updateCliente,
};
