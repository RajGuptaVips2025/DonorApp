const express = require("express");
const router = express.Router();

const { signup, login, profileById } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", signup);
router.post("/login", login);
router.get("/:id", profileById);


module.exports = router;
