import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import serverless from 'serverless-http';



const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());



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


  router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Hello, World!'});
  });

  router.post('/send-email', (req, res) => {
    const { subject, html } = req.body;
  
    const mailOptions = {
      from: 'shosanacodemia@gmail.com',
      to: 'shosanacodemia@gmail.com',
      subject,
      html,
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

  router.get("/hello", (req, res)=>{
    res.status(200).send("Hello world");
  })

  router.get("/test", (req, res)=>{
    res.status(200).json({success: true, msg: "Test Checked"});
  })

  app.use("/.netlify/functions/api", router);



  // eslint-disable-next-line no-undef
  exports.handler = serverless(app);



