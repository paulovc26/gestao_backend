const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");

const usersController = require("../controllers/usersController");

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     example: Username
 *                   password:
 *                     type: string
 *                     example: Senha
 */

router.get("/api/users", authMiddleware.checkToken, usersController.getAll);

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Registro de usuário
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "email@dominio.com"
 *               password:
 *                 type: string
 *                 example: "senha123"
 *     responses:
 *       200:
 *         description: Usuário cadastrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: "email@dominio.com"
 *                 password:
 *                   type: string
 *                   example: "senha123"
 *       400:
 *         description: Erro no cadastro do usuário
 */

router.post("/api/register", usersController.createUser);

// todo put e delete

module.exports = router;
