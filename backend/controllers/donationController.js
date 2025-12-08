const pool = require("../config/db");

exports.createDonation = async (req, res) => {
  try {
    const { amount, frequency, impact, upi_id, on_behalf, message } = req.body;
    const donorId = req.user.id; 

    if (!amount || !frequency || !impact || !upi_id || !on_behalf || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (upi_id.length > 15) {
      return res.status(400).json({ message: "UPI ID must be 15 characters or less" });
    }

    const result = await pool.query(
      `INSERT INTO donations 
        (donor_id, amount, frequency, impact, upi_id, on_behalf, message)
       VALUES ($1,$2,$3,$4,$5,$6,$7)
       RETURNING donation_id, donor_id, amount, frequency, impact, message, created_at`,
      [donorId, amount, frequency, impact, upi_id, on_behalf, message]
    );

    res.status(201).json({
      message: "Donation recorded successfully",
      donation: result.rows[0],
    });

  } catch (error) {
    console.error("Donation Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getDonationsByDonor = async (req, res) => {
  try {
    const donorId = req.params.donorId;

    if (!donorId) {
      return res.status(400).json({ message: "Donor ID is required" });
    }

    const result = await pool.query(
      `SELECT donation_id, donor_id, amount, frequency, impact, upi_id, 
              on_behalf, message, created_at
       FROM donations
       WHERE donor_id = $1
       ORDER BY created_at DESC`,
      [donorId]
    );

    res.json({
      donor_id: donorId,
      count: result.rows.length,
      donations: result.rows
    });

  } catch (error) {
    console.error("Fetch Donations Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

