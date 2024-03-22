import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mainContext } from "./context/mainContext";
import LandingPage from "./components/LandingPage";
import SuccessPage from "./components/SuccessPage";
import ScrollToTop from "./ScrollToTop";
import { monthFunct, dayFunct, hourFunct, minuteFunct, secFunct } from "./components/data";
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { db } from "../FirebaseConfig";



function App() {

  const [active, setActive] = useState("Home");
  const [menuVisible, setMenuVisible] = useState(false);
  const [ifLandingLoaded, setIfLandingLoaded] = useState(false);
  const [dateLoaded, setDateLoaded] = useState(true);

  const [customDate, setCustomDate] = useState("03/24/2024 07:30:00");
  const timeVariable1 = new Date(customDate);
  const timeVariable2 = new Date;
  const [futureCounted, setFutureCounted] = useState(timeVariable1.valueOf());
  const timeTodayCounted = timeVariable2.valueOf();

  const UTCDate = new Date(futureCounted);
  const getHours = UTCDate.getHours();
  const getMinutes = UTCDate.getMinutes();
  const getSeconds = UTCDate.getSeconds();
  const getDay = UTCDate.getDate();
  const getMonth = UTCDate.getMonth();
  const getYear = UTCDate.getFullYear();
  const futureDate = `${monthFunct(getMonth)}/${dayFunct(getDay)}/${getYear} ${hourFunct(getHours)}:${minuteFunct(getMinutes)}:${secFunct(getSeconds)}`;
  // console.log(futureDate);

  const UTCNowDate = new Date;
  const getNowHours = UTCNowDate.getHours();
  const getNowMinutes = UTCNowDate.getMinutes();
  const getNowSeconds = UTCNowDate.getSeconds();
  const getNowDay = UTCNowDate.getDate();
  const getNowMonth = UTCNowDate.getMonth();
  const getNowYear = UTCNowDate.getFullYear();
  // eslint-disable-next-line no-unused-vars
  const nowDate = `${monthFunct(getNowMonth)}/${dayFunct(getNowDay)}/${getNowYear} ${hourFunct(getNowHours)}:${minuteFunct(getNowMinutes)}:${secFunct(getNowSeconds)}`;

  const sevenDaysCount = 604800000;
  let examTimeLimit = (futureCounted - timeTodayCounted)/1000;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // const [dateTestBtn, setDateTestbtn] = useState(customDate);


  // This creates a new collection in the firestore
  // const customDateRef = collection(db, "Current-Date");


  const fetchDateData = async () => {
    try {
      const getDateRef = doc(db, "Current-Date", "date_document");
      const dateSnap = await getDoc(getDateRef);

      if (dateSnap.exists()) {
        console.log("Document data:", dateSnap.data().Date);
        setCustomDate(dateSnap.data.Date);
        console.log("Success fetching Date...");
        setDateLoaded(true);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No available Date!");
      }
    } catch (error) {
      console.log("Error fetching Date...");
    }
  }

  // const handleDateBtn = async () => {
  //   try {
  //     await updateDoc(doc(customDateRef, "date_document"), { Date: nowDate });
  //     setDateTestbtn(nowDate);
  //     console.log("Success updating Date");
  //   } catch (err) {
  //     console.log("Error updating Date");
  //   }
  // }


  const updateDateFunction = async () => {
    try {
      if (examTimeLimit < 2 && examTimeLimit > -2) {
        setFutureCounted((prev) => prev + sevenDaysCount);
        setCustomDate(() => futureDate);
        await setDoc(doc(db, "Current-Date", "date_document"), { Date: futureDate });
        console.log("Updated Date successfully...");
      }
    } catch (error) {
      console.log("Error updating Current Date:", error)
    }
  }

  useEffect(() => {
    fetchDateData();
  }, [])
  

  useEffect(() => {
    updateDateFunction();
    const setExamTimerInterval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      examTimeLimit = examTimeLimit - 1;
      setSeconds(()=>Math.floor(examTimeLimit % 60 ));
      setMinutes(()=>Math.floor((examTimeLimit / 60) % 60));
      setHours(()=>Math.floor((examTimeLimit / 3600) % 24));
      setDays(()=>Math.floor(examTimeLimit / 86400));
    }, 1000);

    return () => clearInterval(setExamTimerInterval);

  }, [examTimeLimit])

  return (
    <>
      <mainContext.Provider 
        value={{ hours, minutes, seconds, days, futureDate, active, setActive, menuVisible, setMenuVisible, 
        ifLandingLoaded, setIfLandingLoaded, dateLoaded, setDateLoaded }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </BrowserRouter>
      </mainContext.Provider>
    </>
  )
}

export default App

