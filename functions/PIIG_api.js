//! == == == ==>>>Backend Code (Netlify - Production)


import express from 'express';
import nodemailer from 'nodemailer';
import multer from 'multer';
// import path from 'path';
import cors from 'cors';
import serverless from 'serverless-http';



const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());



// eslint-disable-next-line no-unused-vars
export async function handler(event, context) {
    // Calculate countdown
    const calculateCountdown = () => {
        // Logic to calculate the countdown based on your requirements
        const currentDate = new Date();
        const futureDate = new Date("2024-12-31T23:59:59");
        const countdownSeconds = Math.floor((futureDate - currentDate) / 1000);
        return countdownSeconds;
    };

    // Get countdown
    const countdown = calculateCountdown();

    // Return countdown data
    return {
        statusCode: 200,
        body: JSON.stringify({ countdown })
    };
}

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

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Handle POST request to send email with attachment
router.post('/send-email', upload.single('attachment'), (req, res) => {
    const { to, subject, html } = req.body;

    const mailOptions = {
      from: 'shosanacodemia@gmail.com',
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


app.use("/.netlify/functions/api", router);
// eslint-disable-next-line no-undef
module.exports.handler = serverless(app);



//? == == == ==>>>Frontend Code
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CountdownComponent = () => {
//     const [countdown, setCountdown] = useState(0);

//     useEffect(() => {
//         const fetchCountdown = async () => {
//             try {
//                 const response = await axios.get('/countdown'); // Assuming the server is running on the same host
//                 setCountdown(response.data.countdown);
//             } catch (error) {
//                 console.error('Error fetching countdown:', error);
//             }
//         };

//         fetchCountdown();

//         // Update countdown every second
//         const interval = setInterval(() => {
//             fetchCountdown();
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div>
//             <h1>Countdown: {countdown} seconds</h1>
//         </div>
//     );
// };

// export default CountdownComponent;












// Configure the email transport







