import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import serverless from 'serverless-http';



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
    service: 'gmail', // e.g., 'gmail'
    auth: {
        user: 'shosanacodemia@gmail.com',
        pass: 'mgkr dhey vfry zdrc',
      },
      tls: {
        rejectUnauthorized: false, // Bypass SSL certificate validation
      },
  });

  router.post('/send-email', (req, res) => {
    const { subject, html } = req.body;
  
    const mailOptions = {
      from: 'shosanacodemia@gmail.com',
      to: 'shosanacodemia@gmail.com',
      subject: subject,
      html: html,
    }

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

  app.use("/.netlify/functions/api", router);


  export const handler = serverless(app);



