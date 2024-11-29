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
 * /api/users:
 *   post:
 *     summary: Registro de usuário
 *     tags: [Register]
 *     responses:
 *       200:
 *         description: Faz o cadastro de usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     example: Email
 *                   password:
 *                     type: string
 *                     example: Senha
 */

router.post("/api/register", usersController.createUser);

// todo put e delete

module.exports = router;
