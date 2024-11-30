const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const contratosFornecedoresController = require("../controllers/contratosFornecedoresController");

/**
 * @swagger
 * /api/contratos-fornecedores:
 *   get:
 *     summary: Retorna todos os contratos de fornecedores
 *     tags: [Contratos Fornecedores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de contratos de fornecedores
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
 *                   id_fornecedor:
 *                     type: string
 *                     example: "1"
 *                   numero_ctr:
 *                     type: string
 *                     example: "CTR12345"
 *                   valor_contratado:
 *                     type: number
 *                     example: 150000
 *                     description: "Valor contratado, apenas números, sem pontuação."
 *                   data_inicio:
 *                     type: string
 *                     format: date
 *                     example: "2024-01-01"
 *                   data_fim:
 *                     type: string
 *                     format: date
 *                     example: "2024-12-31"
 *                   detalhes:
 *                     type: string
 *                     example: "Contrato para fornecimento de materiais."
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       500:
 *         description: Erro interno do servidor.
 *
 *   post:
 *     summary: Cria um novo contrato de fornecedor
 *     tags: [Contratos Fornecedores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_fornecedor:
 *                 type: string
 *                 example: "1"
 *               numero_ctr:
 *                 type: string
 *                 example: "CTR12345"
 *               valor_contratado:
 *                 type: number
 *                 example: 150000
 *                 description: "Valor contratado, apenas números, sem pontuação."
 *               data_inicio:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *               data_fim:
 *                 type: string
 *                 format: date
 *                 example: "2024-12-31"
 *               detalhes:
 *                 type: string
 *                 example: "Contrato para fornecimento de materiais."
 *     responses:
 *       201:
 *         description: Contrato de fornecedor criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "2"
 *                 id_fornecedor:
 *                   type: string
 *                   example: "1"
 *                 numero_ctr:
 *                   type: string
 *                   example: "CTR12345"
 *                 valor_contratado:
 *                   type: number
 *                   example: 150000
 *                 data_inicio:
 *                   type: string
 *                   format: date
 *                   example: "2024-01-01"
 *                 data_fim:
 *                   type: string
 *                   format: date
 *                   example: "2024-12-31"
 *                 detalhes:
 *                   type: string
 *                   example: "Contrato para fornecimento de materiais."
 *       400:
 *         description: Solicitação inválida (dados de entrada incorretos).
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       500:
 *         description: Erro interno do servidor.
 *
 * /api/contratos-fornecedores/{id}:
 *   get:
 *     summary: Retorna os dias restantes para o contrato específico
 *     tags: [Contratos Fornecedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do contrato de fornecedor
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dias restantes para o contrato
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dias_restantes:
 *                   type: integer
 *                   example: 150
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       404:
 *         description: Contrato de fornecedor não encontrado com o ID fornecido.
 *       500:
 *         description: Erro interno do servidor.
 *
 *   put:
 *     summary: Atualiza um contrato de fornecedor existente
 *     tags: [Contratos Fornecedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do contrato de fornecedor a ser atualizado
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
 *               id_fornecedor:
 *                 type: string
 *                 example: "1"
 *               numero_ctr:
 *                 type: string
 *                 example: "CTR12345"
 *               valor_contratado:
 *                 type: number
 *                 example: 150000
 *                 description: "Valor contratado, apenas números, sem pontuação."
 *               data_inicio:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *               data_fim:
 *                 type: string
 *                 format: date
 *                 example: "2024-12-31"
 *               detalhes:
 *                 type: string
 *                 example: "Contrato para fornecimento de materiais."
 *     responses:
 *       200:
 *         description: Contrato de fornecedor atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 id_fornecedor:
 *                   type: string
 *                   example: "1"
 *                 numero_ctr:
 *                   type: string
 *                   example: "CTR12345"
 *                 valor_contratado:
 *                   type: number
 *                   example: 150000
 *                 data_inicio:
 *                   type: string
 *                   format: date
 *                   example: "2024-01-01"
 *                 data_fim:
 *                   type: string
 *                   format: date
 *                   example: "2024-12-31"
 *                 detalhes:
 *                   type: string
 *                   example: "Contrato para fornecimento de materiais."
 *       400:
 *         description: Solicitação inválida ou dados de entrada incorretos.
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       404:
 *         description: Contrato de fornecedor não encontrado com o ID fornecido.
 *       500:
 *         description: Erro interno do servidor.
 *
 *   delete:
 *     summary: Deleta um contrato de fornecedor existente
 *     tags: [Contratos Fornecedores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do contrato de fornecedor a ser deletado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contrato de fornecedor deletado com sucesso
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       404:
 *         description: Contrato de fornecedor não encontrado com o ID fornecido.
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

// GET ROUTES
router.get(
  "/api/contratos-fornecedores",
  authMiddleware.checkToken,
  contratosFornecedoresController.getAll
);

// GET CONTADOR DE DIAS POR CONTRATO ESPECIFICO

router.get(
  "/api/contratos-fornecedores/:id",
  authMiddleware.checkToken,
  contratosFornecedoresController.obterDiasRestantes
);

// POST ROUTES
router.post(
  "/api/contratos-fornecedores",
  authMiddleware.checkToken,
  contratosFornecedoresController.createContrato
);

// PUT ROUTES
router.put(
  "/api/contratos-fornecedores/:id",
  authMiddleware.checkToken,
  contratosFornecedoresController.updateContrato
);

// DELETE ROUTES
router.delete(
  "/api/contratos-fornecedores/:id",
  authMiddleware.checkToken,
  contratosFornecedoresController.deleteContrato
);

module.exports = router;
