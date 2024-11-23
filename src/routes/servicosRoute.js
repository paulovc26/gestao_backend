const express = require("express");
const router = express.Router();
const servicosController = require("../controllers/servicosController");

// GET ROUTES
router.get("/api/servicos", servicosController.getAll);

// POST ROUTES
router.post("/api/servicos", servicosController.createServico);

// PUT ROUTES
router.put("/api/servicos/:id", servicosController.updateServico);

// DELETE ROUTES
router.delete("/api/servicos/:id", servicosController.deleteServico);

module.exports = router;
