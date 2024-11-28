const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get(
  "/api/clientes",
  authMiddleware.checkToken,
  clientesController.getAll
);

router.post(
  "/api/clientes",
  authMiddleware.checkToken,
  clientesController.createCliente
);

router.put(
  "/api/clientes/:id",
  authMiddleware.checkToken,
  clientesController.updateCliente
);

router.delete(
  "/api/clientes/:id",
  authMiddleware.checkToken,
  clientesController.deleteCliente
);

module.exports = router;
