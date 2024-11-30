const express = require("express");
const router = express.Router();
const servicosController = require("../controllers/servicosController");
const authMiddleware = require("../middlewares/authMiddleware");

// GET ROUTES

/**
/**
 * @swagger
 * /api/servicos:
 *   get:
 *     summary: Retorna todos os serviços
 *     tags: [Servicos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de serviços
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 1
 *                   nome_servico:
 *                     type: string
 *                     example: "Serviço A"

 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       500:
 *         description: Erro interno do servidor.
 * 
 *   post:
 *     summary: Cria um novo serviço
 *     tags: [Servicos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome_servico:
 *                 type: string
 *                 example: "Novo Serviço"

 *     responses:
 *       201:
 *         description: Serviço criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "2"
 *                 nome_servico:
 *                   type: string
 *                   example: "Novo Serviço"

 *       400:
 *         description: Solicitação inválida (dados de entrada incorretos).
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       500:
 *         description: Erro interno do servidor.
 * 
 * /api/servicos/{id}:
 *   put:
 *     summary: Atualiza um serviço existente
 *     tags: [Servicos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do serviço a ser atualizado
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
 *               nome_servico:
 *                 type: string
 *                 example: "Serviço Atualizado"

 *     responses:
 *       200:
 *         description: Serviço atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 nome_servico:
 *                   type: string
 *                   example: "Serviço Atualizado"

 *       400:
 *         description: Solicitação inválida ou dados de entrada incorretos.
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       404:
 *         description: Serviço não encontrado com o ID fornecido.
 *       500:
 *         description: Erro interno do servidor.
 * 
 *   delete:
 *     summary: Deleta um serviço existente
 *     tags: [Servicos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do serviço a ser deletado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Serviço deletado com sucesso
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       404:
 *         description: Serviço não encontrado com o ID fornecido.
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
  "/api/servicos",
  authMiddleware.checkToken,
  servicosController.getAll
);

// POST ROUTES
router.post(
  "/api/servicos",
  authMiddleware.checkToken,
  servicosController.createServico
);

// PUT ROUTES
router.put(
  "/api/servicos/:id",
  authMiddleware.checkToken,
  servicosController.updateServico
);

// DELETE ROUTES
router.delete(
  "/api/servicos/:id",
  authMiddleware.checkToken,
  servicosController.deleteServico
);

module.exports = router;
