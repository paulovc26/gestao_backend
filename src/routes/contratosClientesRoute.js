const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const contratosClientesController = require("../controllers/contratosClientesController");

/**
 * @swagger
 * /api/contratos:
 *   get:
 *     summary: Retorna todos os contratos com clientes
 *     tags: [Contratos Clientes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de contratos com clientes
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
 *                   id_cliente:
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
 *                   id_servico_contratado:
 *                     type: string
 *                     example: "2"
 *                   detalhes:
 *                     type: string
 *                     example: "Contrato para prestação de serviço X."
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       500:
 *         description: Erro interno do servidor.
 *
 *   post:
 *     summary: Cria um novo contrato com cliente
 *     tags: [Contratos Clientes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_cliente:
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
 *               id_servico_contratado:
 *                 type: string
 *                 example: "2"
 *               detalhes:
 *                 type: string
 *                 example: "Contrato para prestação de serviço X."
 *     responses:
 *       201:
 *         description: Contrato com cliente criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "2"
 *                 id_cliente:
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
 *                 id_servico_contratado:
 *                   type: string
 *                   example: "2"
 *                 detalhes:
 *                   type: string
 *                   example: "Contrato para prestação de serviço X."
 *       400:
 *         description: Solicitação inválida (dados de entrada incorretos).
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       500:
 *         description: Erro interno do servidor.
 *
 * /api/contratos/{id}:
 *   get:
 *     summary: Retorna os dias restantes para o contrato específico com cliente
 *     tags: [Contratos Clientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do contrato com cliente
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
 *         description: Contrato com cliente não encontrado com o ID fornecido.
 *       500:
 *         description: Erro interno do servidor.
 *
 *   put:
 *     summary: Atualiza um contrato com cliente existente
 *     tags: [Contratos Clientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do contrato com cliente a ser atualizado
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
 *               id_cliente:
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
 *               id_servico_contratado:
 *                 type: string
 *                 example: "2"
 *               detalhes:
 *                 type: string
 *                 example: "Contrato para prestação de serviço X."
 *     responses:
 *       200:
 *         description: Contrato com cliente atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 id_cliente:
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
 *                 id_servico_contratado:
 *                   type: string
 *                   example: "2"
 *                 detalhes:
 *                   type: string
 *                   example: "Contrato para prestação de serviço X."
 *       400:
 *         description: Solicitação inválida ou dados de entrada incorretos.
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       404:
 *         description: Contrato com cliente não encontrado com o ID fornecido.
 *       500:
 *         description: Erro interno do servidor.
 *
 *   delete:
 *     summary: Deleta um contrato com cliente existente
 *     tags: [Contratos Clientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do contrato com cliente a ser deletado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contrato com cliente deletado com sucesso
 *       401:
 *         description: Não autorizado. O token JWT não foi fornecido ou é inválido.
 *       404:
 *         description: Contrato com cliente não encontrado com o ID fornecido.
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
  "/api/contratos",
  authMiddleware.checkToken,
  contratosClientesController.getAll
);

// CONTADOR DE DIAS CONTRATO CLIENTE
router.get(
  "/api/contratos/:id",
  authMiddleware.checkToken,
  contratosClientesController.obterDiasRestantes
);

// POST ROUTES
router.post(
  "/api/contratos",
  authMiddleware.checkToken,
  contratosClientesController.createContrato
);

// PUT ROUTES
router.put(
  "/api/contratos/:id",
  authMiddleware.checkToken,
  contratosClientesController.updateContrato
);

// DELETE ROUTES
router.delete(
  "/api/contratos/:id",
  authMiddleware.checkToken,
  contratosClientesController.deleteContrato
);

module.exports = router;
