const connection = require("./connection");

const getAllFornecedores = async () => {
  const query = "SELECT * FROM tb_fornecedores;";
  const [fornecedores] = await connection.execute(query);
  return fornecedores;
};

// const getOneFornecedor = async (nome_fornecedor) => {
//   const query = "SELECT * FROM fornecedores WHERE nome_fornecedor = ?;";
//   const [cliente] = await connection.execute(query, [nome_fornecedor]);
//   return cliente;
// };

const createFornecedor = async (cliente) => {
  const { nome_fornecedor, cpf_cnpj } = cliente;

  const query =
    "INSERT INTO tb_fornecedores(nome_fornecedor, cpf_cnpj) VALUES (?, ?)";

  const [createdFornecedor] = await connection.execute(query, [
    nome_fornecedor,
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

  if (cliente.nome_fornecedor !== undefined) {
    fields.push("nome_fornecedor = ?");
    values.push(cliente.nome_fornecedor);
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
