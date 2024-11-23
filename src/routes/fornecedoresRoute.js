const express = require("express");
const router = express.Router();
const fornecedoresController = require("../controllers/fornecedoresController");

router.get("/api/fornecedores", fornecedoresController.getAll);

router.post("/api/fornecedores", fornecedoresController.createFornecedor);

router.put("/api/fornecedores/:id", fornecedoresController.updateFornecedor);

router.delete("/api/fornecedores/:id", fornecedoresController.deleteFornecedor);

module.exports = router;
