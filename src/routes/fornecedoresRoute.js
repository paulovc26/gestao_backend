const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const fornecedoresController = require("../controllers/fornecedoresController");

router.get(
  "/api/fornecedores",
  authMiddleware.checkToken,
  fornecedoresController.getAll
);

router.post(
  "/api/fornecedores",
  authMiddleware.checkToken,
  fornecedoresController.createFornecedor
);

router.put(
  "/api/fornecedores/:id",
  authMiddleware.checkToken,
  fornecedoresController.updateFornecedor
);

router.delete(
  "/api/fornecedores/:id",
  authMiddleware.checkToken,
  fornecedoresController.deleteFornecedor
);

module.exports = router;
