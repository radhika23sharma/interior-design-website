const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  query: String
});


const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;

