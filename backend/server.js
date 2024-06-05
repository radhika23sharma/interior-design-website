// backend/server.js

const express = require('express');
const mongoose = require('./db/db.js');
const bodyParser = require('body-parser');
const router = require('./routes/contact');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended:true,limit:'16kb'}))

// Routes
app.use('/', router);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

