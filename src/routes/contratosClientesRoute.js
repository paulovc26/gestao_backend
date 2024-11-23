const express = require("express");
const router = express.Router();
const contratosClientesController = require("../controllers/contratosClientesController");

// GET ROUTES
router.get("/api/contratos", contratosClientesController.getAll);
router.get(
  "/api/contratos/:id",
  contratosClientesController.obterDiasRestantes
);

// POST ROUTES
router.post("/api/contratos", contratosClientesController.createContrato);

// PUT ROUTES
router.put("/api/contratos/:id", contratosClientesController.updateContrato);

// DELETE ROUTES
router.delete("/api/contratos/:id", contratosClientesController.deleteContrato);

module.exports = router;
