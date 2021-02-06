const express = require('express');
const app = express();
const connectDB = require('./db');

// INIT DATABASE CONNECTION
connectDB();

// JSON MIDDLEWARE
app.use(express.json({ extended: false }));

// ROUTES
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT} `));
