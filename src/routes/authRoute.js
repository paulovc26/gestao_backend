const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

/**
 * @swagger
 * /api/usermanage/login:
 *   post:
 *     summary: Post login
 *     tags: [User]
 *     responses:
 *       200:
 *         description: login de teste: admin@admin.com
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   username:
 *                     type: string
 *                     example: Senha
 *                   password:
 *                     type: string
 *                     example: Senha
 */

router.post("/api/usermanage/login", authController.userLogin);

module.exports = router;
