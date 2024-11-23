const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
  const users = await userModel.getAllUsers();
  return res.status(200).json({ users });
};

const getOne = async (req, res) => {
  const user = await userModel.getOneUser();
  return res.status(200).json({ user });
};

const createUser = async (req, res) => {
  try {
    // Criar o usuário
    const createdUser = await userModel.createUser(req.body);

    // Retornar o usuário criado com status 201
    return res.status(201).json(createdUser);
  } catch (error) {
    // Se ocorrer algum erro, capturar e logar
    console.error("Erro ao criar usuário:", error);

    // Retornar uma resposta de erro com status 500
    return res.status(500).json({
      message: "Erro ao criar o usuário",
      error: error.message,
    });
  }
};

module.exports = {
  getAll,
  createUser,
  getOne,
};
