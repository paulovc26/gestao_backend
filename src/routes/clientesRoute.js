const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");
const authMiddleware = require("../middlewares/authMiddleware");

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Retorna todos os clientes
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de clientes
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
 *                     example: "Cliente A"
 *                   cpf_cnpj:
 *                     type: string
 *                     example: "123.456.789-00"
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       500:
 *         description: Erro interno do servidor.
 *
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clientes]
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
 *                 example: "Novo Cliente"
 *               cpf_cnpj:
 *                 type: string
 *                 example: "98765432100"
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
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
 *                   example: "Novo Cliente"
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
 * /api/clientes/{id}:
 *   put:
 *     summary: Atualiza um cliente existente
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do cliente a ser atualizado
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
 *                 example: "Cliente Atualizado"
 *               cpf_cnpj:
 *                 type: string
 *                 example: "111.222.333-44"
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
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
 *                   example: "Cliente Atualizado"
 *                 cpf_cnpj:
 *                   type: string
 *                   example: "111.222.333-44"
 *       400:
 *         description: Solicitação inválida ou dados de entrada incorretos.
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       404:
 *         description: Cliente não encontrado com o ID fornecido.
 *       500:
 *         description: Erro interno do servidor.
 *
 *   delete:
 *     summary: Deleta um cliente existente
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do cliente a ser deletado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente deletado com sucesso
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       404:
 *         description: Cliente não encontrado com o ID fornecido.
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
  "/api/clientes",
  authMiddleware.checkToken,
  clientesController.getAll
);

router.post(
  "/api/clientes",
  authMiddleware.checkToken,
  clientesController.createCliente
);

router.put(
  "/api/clientes/:id",
  authMiddleware.checkToken,
  clientesController.updateCliente
);

router.delete(
  "/api/clientes/:id",
  authMiddleware.checkToken,
  clientesController.deleteCliente
);

module.exports = router;
