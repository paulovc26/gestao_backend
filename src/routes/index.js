// routes/index.js
const express = require("express");
const router = express.Router();

const app = express();
app.use(express.json());

// Importar suas rotas
const usersRoutes = require("./userRoute");
const clientesRoute = require("./clientesRoute");
const servicosRoute = require("./servicosRoute");
const contratosRoute = require("./contratosRoute");
const authRoute = require("./authRoute");

// Usar as rotas importadas
router.use(usersRoutes);
router.use(clientesRoute);
router.use(servicosRoute);
router.use(contratosRoute);
router.use(authRoute);

module.exports = router;
