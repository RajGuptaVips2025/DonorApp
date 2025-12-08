require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const donationRoutes = require("./routes/donationRoutes");
const pool = require('./config/db'); 

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Something broke' });
});

app.get('/', (req, res) => res.send('Auth API is running'));

app.use('/api/donor', authRoutes);
app.use("/api/donation", donationRoutes);


app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is connected" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
