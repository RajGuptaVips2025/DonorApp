const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { createDonation, getDonationsByDonor } = require("../controllers/donationController");

const router = express.Router();

router.post("/create", authMiddleware, createDonation);

router.get("/:donorId", authMiddleware, getDonationsByDonor);

module.exports = router;


