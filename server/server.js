const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/contact', require('./routes/Contact'));
app.use('/api/projects', require('./routes/Project'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
