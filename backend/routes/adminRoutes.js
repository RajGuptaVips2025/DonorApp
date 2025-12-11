const express = require("express");
const { getAllDonors, getTotalDonations } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/donors", authMiddleware, getAllDonors);
router.get("/donations/total", authMiddleware, getTotalDonations);

module.exports = router;
