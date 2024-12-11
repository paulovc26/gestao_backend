const connection = require("./connection");

const getAllFornecedores = async () => {
  const query = "SELECT * FROM tb_fornecedores;";
  const [fornecedores] = await connection.execute(query);
  return fornecedores;
};

// const getOneFornecedor = async (fornecedor) => {
//   const query = "SELECT * FROM fornecedores WHERE fornecedor = ?;";
//   const [cliente] = await connection.execute(query, [fornecedor]);
//   return cliente;
// };

const createFornecedor = async (cliente) => {
  const { fornecedor, cpf_cnpj } = cliente;

  const query =
    "INSERT INTO tb_fornecedores(fornecedor, cpf_cnpj) VALUES (?, ?)";

  const [createdFornecedor] = await connection.execute(query, [
    fornecedor,
    cpf_cnpj,
  ]);

  return createdFornecedor;
};

const deleteFornecedor = async (id) => {
  const query = "DELETE FROM tb_fornecedores WHERE id = ?";
  const removeFornecedor = await connection.execute(query, [id]);
  return removeFornecedor;
};

const updateFornecedor = async (id, cliente) => {
  const fields = [];
  const values = [];

  if (cliente.fornecedor !== undefined) {
    fields.push("fornecedor = ?");
    values.push(cliente.fornecedor);
  }
  if (cliente.cpf_cnpj !== undefined) {
    fields.push("cpf_cnpj = ?");
    values.push(cliente.cpf_cnpj);
  }

  values.push(id);

  const query = `UPDATE tb_fornecedores
    SET ${fields.join(", ")}
    where id = ?;
    `;

  const [updatedFornecedor] = await connection.execute(query, values);

  return updatedFornecedor;
};

module.exports = {
  getAllFornecedores,
  createFornecedor,
  deleteFornecedor,
  updateFornecedor,
};
