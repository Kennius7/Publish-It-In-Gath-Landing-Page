//! == == == ==>>>Backend Code (Development)

import dotenv from "dotenv";
import express from "express";
import nodemailer from 'nodemailer';
import cors from 'cors';


dotenv.config();
const app = express();
app.use(cors());
// eslint-disable-next-line no-undef
const PORT = process.env.PORT;
app.use(express.json());





app.get("/test", (req, res)=>{
  res.status(200).json({success: true, msg: "Test Checked"});
})

// Calculate countdown function
function calculateCountdown() {
    // Logic to calculate the countdown based on your requirements
    const currentDate = new Date();
    const futureDate = new Date("2024-12-31T23:59:59");
    const countdownSeconds = Math.floor((futureDate - currentDate) / 1000);
    return countdownSeconds;
}

// API endpoint to serve countdown data
app.get('/countdown', (req, res) => {
    const countdown = calculateCountdown();
    res.status(200).json({ countdown: countdown });
});


// Configure the email transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: 'shosanacodemia@gmail.com',
      pass: 'mgkr dhey vfry zdrc',
    },
    tls: {
      rejectUnauthorized: false, // Bypass SSL certificate validation
    },
  });


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Handle POST request to send email with attachment
app.post('/send-email', (req, res) => {
    const { subject, html } = req.body;
  
    const mailOptions = {
      from: 'shosanacodemia@gmail.com',
      to: 'shosanacodemia@gmail.com',
      subject: subject,
      html: html,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
      }
    });
  });



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




// {
//   "from": "shosanacodemia@gmail.com",
//   "to": "shosanacodemia@gmail.com",
//   "subject": "Testing",
//   "html": "Hello All!"
// }

