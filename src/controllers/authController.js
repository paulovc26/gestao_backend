const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();
const SECRET_KEY = process.env.SECRET;

const getOne = async (req, res) => {
  try {
    // Buscar um único usuário
    const user = await userModel.getOneUser();

    // Se o usuário não for encontrado
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Retornar o usuário encontrado com status 200
    return res.status(200).json({ user });
  } catch (error) {
    // Se ocorrer algum erro, capturar e logar
    console.error("Erro ao buscar usuário:", error);

    // Retornar uma resposta de erro com status 500
    return res.status(500).json({
      message: "Erro ao buscar o usuário",
      error: error.message,
    });
  }
};

const userLogin = async (req, res) => {
  console.log(req.body); // Verifica os dados que estão chegando no corpo da requisição
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    const user = await User.getOneUser(email);
    if (!user) {
      return res.status(404).json({ error: "usuario não encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "SENHA INCORRETA" });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ message: "login sucess", token });
  } catch (error) {
    res.status(500).json({ error: "erro ao processar" });
  }
};

module.exports = { userLogin };
