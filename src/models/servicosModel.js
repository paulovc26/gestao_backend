const connection = require("./connection");

const getAllServicos = async () => {
  const query = "SELECT * FROM tb_servicos;";
  const [servicos] = await connection.execute(query);
  return servicos;
};

// const getOneServico = async (nome_servico) => {
//   const query = "SELECT * FROM servicos WHERE nome_servico = ?;";
//   const [servico] = await connection.execute(query, [nome_servico]);
//   return servico;
// };

const createServico = async (servico) => {
  const { nome_servico } = servico;

  const query = "INSERT INTO tb_servicos(nome_servico) VALUES (?)";

  const [createdServico] = await connection.execute(query, [nome_servico]);

  return createdServico;
};

const deleteServico = async (id) => {
  const query = "DELETE FROM tb_servicos WHERE id = ?";
  const removeServico = await connection.execute(query, [id]);
  return removeServico;
};

const updateServico = async (id, servico) => {
  const fields = [];
  const values = [];

  if (servico.nome_servico !== undefined) {
    fields.push("nome_servico = ?");
    values.push(servico.nome_servico);
  }

  values.push(id);

  const query = `UPDATE tb_servicos
    SET ${fields.join(", ")}
    where id = ?;
    `;

  const [updatedServico] = await connection.execute(query, values);

  return updatedServico;
};

module.exports = {
  getAllServicos,
  createServico,
  deleteServico,
  updateServico,
};
