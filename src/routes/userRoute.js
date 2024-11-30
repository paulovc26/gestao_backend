const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const usersMiddleware = require("../middlewares/usersMiddleware");

const usersController = require("../controllers/usersController");

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
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
 *                     example: "Username"
 *                   password:
 *                     type: string
 *                     example: "Senha"
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       500:
 *         description: Erro interno do servidor.
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
 *               email:
 *                 type: string
 *                 example: "email@dominio.com"
 *               senha:
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
 *                 email:
 *                   type: string
 *                   example: "email@dominio.com"
 *                 senha:
 *                   type: string
 *                   example: "senha123"
 *       400:
 *         description: Erro no cadastro do usuário (dados inválidos ou faltantes).
 *       500:
 *         description: Erro interno do servidor.
 */
router.post("/api/register", usersController.createUser);

// todo put e delete

module.exports = router;
