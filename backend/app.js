// app.js (or server.js) — replace existing CORS block with this
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const donationRoutes = require('./routes/donationRoutes');
const pool = require('./config/db');

const app = express();

// Build allowed origins array from env
// Accept comma-separated CLIENT_URL(s) in production if needed
const devOrigin = "http://localhost:5173";
const clientUrlEnv = process.env.CLIENT_URL || "";
const clientOrigins = clientUrlEnv
  .split(',')
  .map(s => s.trim())
  .filter(Boolean); // allow multiple if comma separated

const allowedOrigins = [devOrigin, ...clientOrigins];

// CORS options
const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // explicit fail for disallowed origins
    const msg = `CORS Not Allowed - origin: ${origin}`;
    return callback(new Error(msg), false);
  },
  credentials: true,
  optionsSuccessStatus: 204,
};

// enable CORS for all routes using options above
app.use(cors(corsOptions));

// also explicitly handle preflight for all routes
app.options('*', cors(corsOptions));

app.use(express.json());

// routes
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








// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');

// const authRoutes = require('./routes/authRoutes');
// const donationRoutes = require("./routes/donationRoutes");
// const pool = require('./config/db'); 

// const app = express();

// /*
//   ==========================================
//   🚀 DYNAMIC CORS CONFIG (DEV + PROD)
//   ==========================================
// */

// const allowedOrigins = [
//   "http://localhost:5173",                     // Frontend local dev
//   process.env.CLIENT_URL                       // Frontend production (Netlify)
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     // Allow requests with no origin (mobile apps, curl, Postman)
//     if (!origin) return callback(null, true);

//     if (allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     }

//     return callback(new Error("CORS Not Allowed: " + origin), false);
//   },
//   credentials: true,
// }));

// app.use(express.json());

// /*
//   ==========================================
//   ROUTES
//   ==========================================
// */

// app.get('/', (req, res) => res.send('Auth API is running'));

// app.use('/api/donor', authRoutes);
// app.use("/api/donation", donationRoutes);

// app.get("/api/test", (req, res) => {
//   res.json({ message: "Backend is connected" });
// });

// /*
//   ==========================================
//   SERVER START
//   ==========================================
// */

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🌐 Server running on port ${PORT}`);
//   console.log(`Mode: ${process.env.NODE_ENV}`);
//   console.log(`Allowed Origins:`, allowedOrigins);
// });




// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');

// const authRoutes = require('./routes/authRoutes');
// const donationRoutes = require("./routes/donationRoutes");
// const pool = require('./config/db'); 

// const app = express();

// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }));
// app.use(express.json());

// app.use((err, req, res, next) => {
//   console.error('Unhandled error:', err);
//   res.status(500).json({ message: 'Something broke' });
// });

// app.get('/', (req, res) => res.send('Auth API is running'));

// app.use('/api/donor', authRoutes);
// app.use("/api/donation", donationRoutes);


// app.get("/api/test", (req, res) => {
//   res.json({ message: "Backend is connected" });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
