const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const fornecedoresController = require("../controllers/fornecedoresController");

/**
 * @swagger
 * /api/fornecedores:
 *   get:
 *     summary: Retorna todos os fornecedores
 *     tags: [Fornecedores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de fornecedores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "1"
 *                   nome:
 *                     type: string
 *                     example: "Fornecedor A"
 *                   cpf_cnpj:
 *                     type: string
 *                     example: "12345678900"
 *                     description: "CPF ou CNPJ deve conter apenas números, sem pontuação."
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       500:
 *         description: Erro interno do servidor.
 *
 *   post:
 *     summary: Cria um novo fornecedor
 *     tags: [Fornecedores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Novo Fornecedor"
 *               cpf_cnpj:
 *                 type: string
 *                 example: "98765432100"
 *                 description: "CPF ou CNPJ deve conter apenas números, sem pontuação."
 *     responses:
 *       201:
 *         description: Fornecedor criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "2"
 *                 nome:
 *                   type: string
 *                   example: "Novo Fornecedor"
 *                 cpf_cnpj:
 *                   type: string
 *                   example: "98765432100"
 *       400:
 *         description: Solicitação inválida (dados de entrada incorretos).
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       500:
 *         description: Erro interno do servidor.
 *
 * /api/fornecedores/{id}:
 *   put:
 *     summary: Atualiza um fornecedor existente
 *     tags: [Fornecedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do fornecedor a ser atualizado
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Fornecedor Atualizado"
 *               cpf_cnpj:
 *                 type: string
 *                 example: "11223344556"
 *                 description: "CPF ou CNPJ deve conter apenas números, sem pontuação."
 *     responses:
 *       200:
 *         description: Fornecedor atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 nome:
 *                   type: string
 *                   example: "Fornecedor Atualizado"
 *                 cpf_cnpj:
 *                   type: string
 *                   example: "11223344556"
 *       400:
 *         description: Solicitação inválida ou dados de entrada incorretos.
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       404:
 *         description: Fornecedor não encontrado com o ID fornecido.
 *       500:
 *         description: Erro interno do servidor.
 *
 *   delete:
 *     summary: Deleta um fornecedor existente
 *     tags: [Fornecedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do fornecedor a ser deletado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Fornecedor deletado com sucesso
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       404:
 *         description: Fornecedor não encontrado com o ID fornecido.
 *       500:
 *         description: Erro interno do servidor.
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

router.get(
  "/api/fornecedores",
  authMiddleware.checkToken,
  fornecedoresController.getAll
);

router.post(
  "/api/fornecedores",
  authMiddleware.checkToken,
  fornecedoresController.createFornecedor
);

router.put(
  "/api/fornecedores/:id",
  authMiddleware.checkToken,
  fornecedoresController.updateFornecedor
);

router.delete(
  "/api/fornecedores/:id",
  authMiddleware.checkToken,
  fornecedoresController.deleteFornecedor
);

module.exports = router;
