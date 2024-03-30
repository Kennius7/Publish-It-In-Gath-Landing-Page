//! == == == ==>>>Backend Code (Development)

import dotenv from "dotenv";
import express from "express";
import nodemailer from 'nodemailer';
import multer from 'multer';
// import path from 'path';
import cors from 'cors';


dotenv.config();
const app = express();
app.use(cors());
// eslint-disable-next-line no-undef
const PORT = process.env.PORT;
// eslint-disable-next-line no-undef
console.log(process.env.NODE_ENV);
app.use(express.json());





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
    res.json({ countdown });
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

// Configure file storage using multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Handle POST request to send email with attachment
app.post('/send-email', upload.single('attachment'), (req, res) => {
    const { to, subject, html } = req.body;
  
    const mailOptions = {
      from: 'Shosan Code Hub',
      to,
      subject,
      html,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Email sending failed' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ success: true, message: 'Email sent successfully' });
      }
    });
  });

app.get("/test", (req, res)=>{
  res.status(200).json({success: true, msg: "Test Checked"});
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


