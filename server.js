const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referralRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');
const prisma = require('./config/db');



dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Confirm Database Connectivity
async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1); 
    
  }
}
checkDatabaseConnection();

// Health Check API Endpoint
app.get('/api/status', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`; // Simple query to check DB health
    res.json({ status: 'API is running', database: 'Connected' });
  } catch (error) {
    res.status(500).json({ status: 'API running', database: 'Not connected', error: error.message });
  }
});

// Register Routes
app.use('/api', referralRoutes);
app.use('/api', courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
