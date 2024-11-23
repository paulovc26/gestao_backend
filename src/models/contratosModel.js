const connection = require("./connection");

const getAllContratos = async () => {
  const query = "SELECT * FROM tb_contrato_cliente;";
  const [contratos] = await connection.execute(query);
  return contratos;
};

const getContratoById = async (id) => {
  const query = "SELECT * FROM tb_contrato_cliente WHERE id = ?";
  const [contrato] = await connection.execute(query, [id]);
  return contrato[0]; // Retorna o primeiro resultado (caso exista)
};

const createContrato = async (contrato) => {
  const {
    id_cliente,
    numero_ctr,
    valor_contratado,
    data_inicio,
    data_fim,
    id_servico_contratado,
    detalhes,
  } = contrato;

  const query =
    "INSERT INTO gestao_empresarial.tb_contrato_cliente (id_cliente, numero_ctr, valor_contratado, data_inicio, data_fim, id_servico_contratado, detalhes) VALUES (?, ?, ?, ?, ?, ?, ?);";

  const [createdContrato] = await connection.execute(query, [
    id_cliente,
    numero_ctr,
    valor_contratado,
    data_inicio,
    data_fim,
    id_servico_contratado,
    detalhes,
  ]);

  return createdContrato;
};

const updateContrato = async (id, contrato) => {
  // Iniciar uma lista de campos e valores que precisam ser atualizados
  const fields = [];
  const values = [];

  // Verificar se os campos estão presentes e adicioná-los à lista de campos
  if (contrato.id_cliente !== undefined) {
    fields.push("id_cliente = ?");
    values.push(contrato.id_cliente);
  }
  if (contrato.numero_ctr !== undefined) {
    fields.push("numero_ctr = ?");
    values.push(contrato.numero_ctr);
  }
  if (contrato.valor_contratado !== undefined) {
    fields.push("valor_contratado = ?");
    values.push(contrato.valor_contratado);
  }
  if (contrato.data_inicio !== undefined) {
    fields.push("data_inicio = ?");
    values.push(contrato.data_inicio);
  }
  if (contrato.data_fim !== undefined) {
    fields.push("data_fim = ?");
    values.push(contrato.data_fim);
  }
  if (contrato.id_servico_contratado !== undefined) {
    fields.push("id_servico_contratado = ?");
    values.push(contrato.id_servico_contratado);
  }
  if (contrato.detalhes !== undefined) {
    fields.push("detalhes = ?");
    values.push(contrato.detalhes);
  }

  // Adicionar o ID do contrato à lista de valores (no final)
  values.push(id);

  // Construir a query dinâmica
  const query = `
    UPDATE gestao_empresarial.tb_contrato_cliente
    SET ${fields.join(", ")}
    WHERE id = ?;
  `;

  // Executar a query com os valores
  const [updatedContrato] = await connection.execute(query, values);

  return updatedContrato;
};

const deleteContrato = async (id) => {
  const query = "DELETE FROM tb_contrato_cliente WHERE id = ?;";
  const removeContrato = await connection.execute(query, [id]);
  return removeContrato;
};

module.exports = {
  getAllContratos,
  getContratoById,
  createContrato,
  updateContrato,
  deleteContrato,
};
