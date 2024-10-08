// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Contact Page Route
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Handle form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // For now, just log the data to the console
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Send a success message to the user
  res.send('Thank you for contacting us! We will get back to you soon.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const nodemailer = require('nodemailer');

// Set up Nodemailer transport (replace with your email service credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or use any other email service
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com', // Your email address to receive messages
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('There was an error sending your message. Please try again later.');
    } else {
      console.log(`Email sent: ${info.response}`);
      res.send('Thank you for contacting us! We will get back to you soon.');
    }
  });
});
