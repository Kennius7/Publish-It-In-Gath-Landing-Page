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
      subject: subject,
      html: htmlEmail,
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


  router.get('/countdown', async (req, res) => {
    const getDateRef = doc(db, "Current-Date", "date_document");
    const fetchDateData = await getDoc(getDateRef);
    if (fetchDateData.data().date) {
      res.status(200).json({ success: true, date: fetchDateData.data().date.toString() });
    } else {
      res.status(404).json({ success: false, msg: "Date not found" });
    }
  });
  
  router.post('/countdown', async (req, res)=>{
    const updatedDate = req.body.date;
    await setDoc(doc(db, "Current-Date", "date_document"), { date: updatedDate })
    .then(()=>{
      res.status(200).json({ success: true, msg: "Date Updated Successfully" })
    })
    .catch((error)=>{
      res.status(500).json({ success: false, msg: `Error updating Date: ${error}` })
    })
  })



  app.use("/.netlify/functions/api", router);

  export const handler = serverless(app);



