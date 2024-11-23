const express = require("express");
const router = express.Router();
const contratosController = require("../controllers/contratosController");

// GET ROUTES
router.get("/api/contratos", contratosController.getAll);
router.get("/api/contratos/:id", contratosController.obterDiasRestantes);

// POST ROUTES
router.post("/api/contratos", contratosController.createContrato);

// PUT ROUTES
router.put("/api/contratos/:id", contratosController.updateContrato);

// DELETE ROUTES
router.delete("/api/contratos/:id", contratosController.deleteContrato);

module.exports = router;
