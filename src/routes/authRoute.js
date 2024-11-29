const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

/**
 * @swagger
 * /api/usermanage/login:
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
 *                     example: Senha
 *                   password:
 *                     type: string
 *                     example: Senha
 */

router.post("/api/usermanage/login", authController.userLogin);

module.exports = router;
