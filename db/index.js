// Environment Variables
require('dotenv').config();

// Database connection
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
