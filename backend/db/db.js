

const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://radhika:radhika123@cluster0.lqlwryy.mongodb.net/assignment';

// Connect to MongoDB without deprecated options
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    });


module.exports = mongoose;
