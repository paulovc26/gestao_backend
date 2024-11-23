const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");

router.get("/api/clientes", clientesController.getAll);

router.post("/api/clientes", clientesController.createCliente);

router.put("/api/clientes/:id", clientesController.updateCliente);

router.delete("/api/clientes/:id", clientesController.deleteCliente);

module.exports = router;
