const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/contact');
const mongoose = require('./db/db.js');
const app = express();
const PORT = process.env.PORT || 8000;



// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// Routes
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
