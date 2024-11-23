const User = require("./models/userModel");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const express = require("express");
const cors = require("cors");

const router = express.Router();

router.use(cors());

module.exports = router;
