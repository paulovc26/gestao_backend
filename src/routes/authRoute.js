const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

/**
 * @swagger
 * /api/usermanage/login:
 *   post:
 *     summary: Realiza o login de um usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "admin@admin.com"
 *               senha:
 *                 type: string
 *                 example: "senha123"
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: "admin@admin.com"
 *                 senha:
 *                   type: string
 *                   example: "senha123"
 *       401:
 *         description: Credenciais inválidas (usuário ou senha incorretos).
 *       500:
 *         description: Erro interno do servidor.
 */
router.post("/api/usermanage/login", authController.userLogin);

module.exports = router;
