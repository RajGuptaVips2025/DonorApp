require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const donationRoutes = require('./routes/donationRoutes');
const pool = require('./config/db');

const app = express();

const devOrigin = "http://localhost:5173";
const clientUrlEnv = process.env.CLIENT_URL || "";
const clientOrigins = clientUrlEnv
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

const allowedOrigins = [devOrigin, ...clientOrigins];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    const msg = `CORS Not Allowed - origin: ${origin}`;
    return callback(new Error(msg), false);
  },
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.options(/(.*)/, cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => res.send('Auth API is running'));
app.use('/api/donor', authRoutes);
app.use('/api/donation', donationRoutes);

app.get('/api/test', (req, res) => res.json({ message: 'Backend is connected' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server running on port ${PORT}`);
  console.log('Mode:', process.env.NODE_ENV || 'development');
  console.log('Allowed origins:', allowedOrigins);
});
