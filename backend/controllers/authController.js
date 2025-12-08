const pool = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT_ROUNDS = 10;

exports.signup = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      password,
      address,
      state,
      city,
      pin
    } = req.body;

    if (!name || !phone || !email || !password || !address || !state || !city || !pin) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userCheck = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const result = await pool.query(
      `INSERT INTO users 
        (name, phone, email, password, address, state, city, pin) 
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8) 
       RETURNING uuid_id AS id, name, phone, email, address, state, city, pin, created_at`,
      [
        name,
        phone,
        email,
        hashedPassword,
        address,
        state,
        city,
        pin
      ]
    );

    res.status(201).json({
      message: "User registered successfully",
      user: result.rows[0]
    });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const userQuery = await pool.query(
      "SELECT uuid_id AS id, * FROM users WHERE email=$1",
      [email]
    );

    if (userQuery.rows.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = userQuery.rows[0];

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email }, 
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.profileById = async (req, res) => {
  try {
    const donorId = req.params.id; 

    const user = await pool.query(
      `SELECT 
        uuid_id AS id, name, phone, email, address, state, city, pin, created_at
       FROM users 
       WHERE uuid_id=$1`,
      [donorId]
    );

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "Donor not found" });
    }

    res.json({ donor: user.rows[0] });

  } catch (error) {
    console.error("profileById Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.profile = async (req, res) => {
  try {
    const userId = req.user.id; 

    const user = await pool.query(
      `SELECT 
        uuid_id AS id, name, phone, email, address, state, city, pin, created_at
       FROM users 
       WHERE uuid_id=$1`,
      [userId]
    );

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ user: user.rows[0] });

  } catch (error) {
    console.error("Profile Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
