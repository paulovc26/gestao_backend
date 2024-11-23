// routes/index.js
const express = require("express");
const router = express.Router();

// Importar suas rotas
const usersRoutes = require("./userRoute");

const clientesRoute = require("./clientesRoute");
const servicosRoute = require("./servicosRoute");

// Usar as rotas importadas
router.use(usersRoutes);
router.use(clientesRoute);
router.use(servicosRoute);

module.exports = router;
