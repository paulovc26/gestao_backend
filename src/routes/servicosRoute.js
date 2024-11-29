const express = require("express");
const router = express.Router();
const servicosController = require("../controllers/servicosController");
const authMiddleware = require("../middlewares/authMiddleware");

// GET ROUTES

/**
 * @swagger
  /api/servicos:
    get:
      summary: Retorna todos os serviços
      description: Esta rota retorna todos os serviços disponíveis.
      operationId: getAllServicos
      tags:
        - Servicos
      security:
        - bearerAuth: []
      responses:
        '200':
          description: Lista de serviços obtida com sucesso
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Servico'
        '401':
          description: Não autorizado. O token JWT não foi fornecido ou é inválido.
        '500':
          description: Erro interno do servidor.
    post:
      summary: Cria um novo serviço
      description: Esta rota cria um novo serviço. O usuário precisa estar autenticado.
      operationId: createServico
      tags:
        - Servicos
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ServicoInput'
      responses:
        '201':
          description: Serviço criado com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Servico'
        '400':
          description: Solicitação inválida (dados de entrada incorretos).
        '401':
          description: Não autorizado. O token JWT não foi fornecido ou é inválido.
        '500':
          description: Erro interno do servidor.
 */

router.get("/api/servicos", servicosController.getAll);

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
