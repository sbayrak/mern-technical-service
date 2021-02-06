const express = require('express');
const app = express();
const connectDB = require('./db');

// INIT DATABASE CONNECTION
connectDB();

// JSON MIDDLEWARE
app.use(express.json({ extended: false }));

// ROUTES
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/records', require('./routes/api/records'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT} `));
