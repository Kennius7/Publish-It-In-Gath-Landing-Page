import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import serverless from 'serverless-http';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig';


const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  next();
})


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shosanacodemia@gmail.com',
        pass: 'mgkr dhey vfry zdrc',
      },
      tls: {
        rejectUnauthorized: false, // Bypass SSL certificate validation
      },
  });

  router.post('/send-email', (req, res) => {
    const formData = req.body;
    // const { fullName, number, address } = req.body;
    const subject = "PIIG Seat Reservations";
    const htmlEmail = `
      <html>
          <body>
          <p>${formData.fullName} just booked a seat for the oncoming Sunday service.</p>
          <p>His/Her WhatSapp number is: ${formData.number}</p>
          <p>His/Her address is: ${formData.address}</p>
          </body>
      </html>
    `;

    const mailOptions = {
      from: 'shosanacodemia@gmail.com',
      to: 'shosanacodemia@gmail.com',
      subject,
      html,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ 
          success: false, 
          timeoutMessage: "Error: Request Timed Out. Check your network and try again.",
          errorMessage: "Error: Registration Failed."
        });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ 
          success: true, 
          emailMessage: 'Email sent successfully', 
          formMessage: 'Registration successful.',
          check: formData,
        });
      }
    });
  });

  router.get("/countdown", (req, res) => {

    const calculateCountdown = () => {
      // Logic to calculate the countdown based on your requirements
      const currentDate = new Date();
      const futureDate = new Date("2024-12-31T23:59:59");
      const countdownSeconds = Math.floor((futureDate - currentDate) / 1000);
      return countdownSeconds;
    };
  
    const countdown = calculateCountdown();

    res.status(200).json({ success: true, data: countdown });

  })

  router.get("/hello", (req, res)=>{
    res.status(200).send("Hello world");
  })

  router.get("/test", (req, res)=>{
    res.status(200).json({success: true, msg: "Test Checked"});
  })

  app.use("/.netlify/functions/api", router);



  // eslint-disable-next-line no-undef
  export const handler = serverless(app);



