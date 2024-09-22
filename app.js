const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const ticketRoutes = require('./routes/ticketRoutes');
const errorHandler = require('./utils/errorHandler');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/tickets', ticketRoutes);

// Error Handler Middleware
app.use(errorHandler);

  

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
