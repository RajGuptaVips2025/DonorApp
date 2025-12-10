const pool = require("../config/db");

exports.getAllDonors = async (req, res) => {
  try {
    const donorsQuery = await pool.query(`
      SELECT 
        u.uuid_id AS donor_id,
        u.name,
        u.email,
        u.phone,
        u.address,
        u.state,
        u.city,
        u.pin,
        u.created_at,

        COALESCE(SUM(d.amount), 0) AS total_donated,
        COUNT(d.donation_id) AS donation_count
      FROM users u
      LEFT JOIN donations d 
        ON d.donor_id = u.uuid_id
      GROUP BY u.uuid_id
      ORDER BY u.created_at DESC
    `);

    const donationsQuery = await pool.query(`
      SELECT 
        donation_id,
        donor_id,
        amount,
        frequency,
        impact,
        upi_id,
        on_behalf,
        message,
        created_at
      FROM donations
      ORDER BY created_at DESC
    `);

    const donationsMap = {};
    donationsQuery.rows.forEach(d => {
      if (!donationsMap[d.donor_id]) donationsMap[d.donor_id] = [];
      donationsMap[d.donor_id].push(d);
    });

    const donors = donorsQuery.rows.map(donor => ({
      ...donor,
      donations: donationsMap[donor.donor_id] || []
    }));

    res.json({
      count: donors.length,
      donors
    });
  } catch (error) {
    console.error("Admin getAllDonors Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getTotalDonations = async (req, res) => {
  try {
    const totalQuery = await pool.query(`
      SELECT COALESCE(SUM(amount), 0) AS total_donations
      FROM donations
    `);

    res.json({
      total_donations: Number(totalQuery.rows[0].total_donations)
    });
  } catch (error) {
    console.error("Admin totalDonations Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
