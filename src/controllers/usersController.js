const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
  const users = await userModel.getAllUsers();
  return res.status(200).json({ users });
};

const getOne = async (req, res) => {
  const { email } = req.body; // Aqui você pega o email da requisição

  try {
    // Chama o modelo para buscar o usuário pelo email
    const user = await userModel.getOneUser(email);

    // Verifica se o usuário foi encontrado
    if (user) {
      return res.status(200).json(user); // Retorna o usuário encontrado
    } else {
      return res.status(404).json({ msg: "Usuário não encontrado" });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ msg: "Erro ao buscar o usuário", error: error.message });
  }
};

const createUser = async (req, res) => {
  const { email, senha } = req.body;

  // Verifica se o email já está em uso
  try {
    const existingUser = await userModel.getOneUser(email);

    if (existingUser) {
      return res
        .status(400)
        .json({ msg: "Já existe um usuário com esse email" });
    }

    const newUser = await userModel.createUser({ email, senha });

    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);

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
