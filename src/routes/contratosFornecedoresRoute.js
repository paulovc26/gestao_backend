const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const contratosFornecedoresController = require("../controllers/contratosFornecedoresController");

// GET ROUTES
router.get(
  "/api/contratos-fornecedores",
  authMiddleware.checkToken,
  contratosFornecedoresController.getAll
);
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
