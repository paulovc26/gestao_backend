const express = require("express");
const router = express.Router();
const servicosController = require("../controllers/servicosController");
const authMiddleware = require("../middlewares/authMiddleware");

// GET ROUTES
router.get(
  "/api/servicos",
  authMiddleware.checkToken,
  servicosController.getAll
);

// POST ROUTES
router.post(
  "/api/servicos",
  authMiddleware.checkToken,
  servicosController.createServico
);

// PUT ROUTES
router.put(
  "/api/servicos/:id",
  authMiddleware.checkToken,
  servicosController.updateServico
);

// DELETE ROUTES
router.delete(
  "/api/servicos/:id",
  authMiddleware.checkToken,
  servicosController.deleteServico
);

module.exports = router;
