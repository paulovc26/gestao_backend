// routes/index.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const app = express();
app.use(express.json());

// Importar suas rotas
const usersRoutes = require("./userRoute");
const clientesRoute = require("./clientesRoute");
const fornecedoresRoute = require("./fornecedoresRoute");
const servicosRoute = require("./servicosRoute");
const contratosClientesRoute = require("./contratosClientesRoute");
const authRoute = require("./authRoute");
const contratosFornecedoresRoute = require("./contratosFornecedoresRoute");

// Usar as rotas importadas
router.use(usersRoutes);
router.use(fornecedoresRoute);
router.use(clientesRoute);
router.use(servicosRoute);
router.use(contratosClientesRoute);
router.use(contratosFornecedoresRoute);
router.use(authRoute);

// testar toa autenticada
router.get("/test", authMiddleware.checkToken, (req, res) => {
  res.status(200).json({ msg: "olá!" });
});

module.exports = router;
