const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Ensure this path is correct

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB(); // Call the connectDB function

// Initialize Express app
const app = express()

app.get('/hello', (req, res) => {
    res.send('hello')
})

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
app.use('/api/tickets', require('./routes/tickets'));

// Get port from environment and store in Express
const PORT = process.env.PORT || 5000;

// Listen on provided port, on all network interfaces
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
