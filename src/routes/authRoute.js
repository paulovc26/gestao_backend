const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/api/usermanage/login", authController.userLogin);

module.exports = router;
