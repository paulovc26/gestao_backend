const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const contratosClientesController = require("../controllers/contratosClientesController");

// GET ROUTES
router.get(
  "/api/contratos",
  authMiddleware.checkToken,
  contratosClientesController.getAll
);
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
