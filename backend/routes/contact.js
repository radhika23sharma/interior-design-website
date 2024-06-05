const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact.js');
const nodemailer = require('nodemailer');

// Configure nodemailer with your email service settings
const transporter = nodemailer.createTransport({
  // host: 'smtp.ethereal.email',
  // port: 587,
  service: "Gmail",
  auth: {
      user: '25radhikasharma@gmail.com',
     pass: 'hrxo dtwy hghg xmgd'
      
  }
});

// Route to fetch all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

// Route to add a new contact
router.post('/contact-form', async (req, res) => {
  try {
    const { name, phone, email, query } = req.body;
    const newContact = new Contact({
      name,
      phone,
      email,
      query
    });
    await newContact.save();

    // Send email after saving the contact
    const mailOptions = {
      from: '25radhikasharma@gmail.com', // Sender address
      to: 'radhika35@amityonline.com', // Recipient address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nQuery: ${query}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        // You might want to handle this error differently, depending on your requirements
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json({ message: 'Contact added successfully' });
  } catch (error) {
    console.error('Error adding Contact:', error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
});

module.exports = router;