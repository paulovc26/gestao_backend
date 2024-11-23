const express = require("express");
const router = express.Router();
const contratosFornecedoresController = require("../controllers/contratosFornecedoresController");

// GET ROUTES
router.get(
  "/api/contratos-fornecedores",
  contratosFornecedoresController.getAll
);
router.get(
  "/api/contratos-fornecedores/:id",
  contratosFornecedoresController.obterDiasRestantes
);

// POST ROUTES
router.post(
  "/api/contratos-fornecedores",
  contratosFornecedoresController.createContrato
);

// PUT ROUTES
router.put(
  "/api/contratos-fornecedores/:id",
  contratosFornecedoresController.updateContrato
);

// DELETE ROUTES
router.delete(
  "/api/contratos-fornecedores/:id",
  contratosFornecedoresController.deleteContrato
);

module.exports = router;
