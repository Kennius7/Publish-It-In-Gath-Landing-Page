import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mainContext } from "./context/mainContext";
import ScrollToTop from "./ScrollToTop";
import { monthFunct, dayFunct, hourFunct, minuteFunct, secFunct } from "./components/data";
import axios from "axios";
import { RegBackend, LandingPage, SuccessPage } from "./components";



function App() {

  const [active, setActive] = useState("Home");
  const [menuVisible, setMenuVisible] = useState(false);
  // const [ifLandingLoaded, setIfLandingLoaded] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminClicked, setIsAdminClicked] = useState(false);

  const [DB_SavedDate, setDB_SavedDate] = useState("");
  const deadlineVariable = new Date(DB_SavedDate);
  const todayVariable = new Date;
  let futureCounted = deadlineVariable.valueOf();
  const timeTodayCounted = todayVariable.valueOf();

  const UTCDate = new Date(futureCounted);
  const getHours = UTCDate.getHours();
  const getMinutes = UTCDate.getMinutes();
  const getSeconds = UTCDate.getSeconds();
  const getDay = UTCDate.getDate();
  const getMonth = UTCDate.getMonth();
  const getYear = UTCDate.getFullYear();
  const futureDate = `${monthFunct(getMonth)}/${dayFunct(getDay)}/${getYear} ${hourFunct(getHours)}:${minuteFunct(getMinutes)}:${secFunct(getSeconds)}`;

  const UTCNowDate = new Date;
  const getNowHours = UTCNowDate.getHours();
  const getNowMinutes = UTCNowDate.getMinutes();
  const getNowSeconds = UTCNowDate.getSeconds();
  const getNowDay = UTCNowDate.getDate();
  const getNowMonth = UTCNowDate.getMonth();
  const getNowYear = UTCNowDate.getFullYear();
  const nowDate = `${monthFunct(getNowMonth)}/${dayFunct(getNowDay)}/${getNowYear} ${hourFunct(getNowHours)}:${minuteFunct(getNowMinutes)}:${secFunct(getNowSeconds)}`;

  const sevenDaysCount = 604800000;
  let examTimeLimit = (futureCounted - timeTodayCounted)/1000;
  // console.log(`Exam Time Limit: ${examTimeLimit}, Future Counted: ${futureCounted}, Deadline Variable: ${deadlineVariable}, Today Variable: ${todayVariable}, Today Counted: ${timeTodayCounted}`);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const apiUrlProd = "https://piig-server.netlify.app/.netlify/functions/api/countdown";
  // const apiUrlDev = "http://localhost:3001/countdown";
  const fetchTimeout = 3000;



  const fetchDateData = async () => {
    try {
      const dateFetch = await axios.get(apiUrlProd);
      if (dateFetch.data.date === "" 
        || dateFetch.data.date === null 
        || dateFetch.data.date === undefined 
        || dateFetch.data.date === "Invalid date") {
        setDB_SavedDate(()=>nowDate);
        console.log("Polling...");
        setTimeout(() => {fetchDateData()}, fetchTimeout);
      } else if (dateFetch.data.date !== "" 
        && dateFetch.data.date !== null 
        && dateFetch.data.date !== undefined 
        && dateFetch.data.date !== "Invalid date") {
        console.log("Document data:", dateFetch.data.date);
        setDB_SavedDate(()=>dateFetch.data.date);
        console.log("Success fetching Date...");
        setIsFetched(true);
      }
    } catch (error) {
      console.log("Error fetching Date...");
    }
  }


  // eslint-disable-next-line no-unused-vars
  const updateDateFunction = async () => {
    try {
      futureCounted = futureCounted + sevenDaysCount;
      const updatedFetchedDate = new Date(futureCounted);
      const getHours = updatedFetchedDate.getHours();
      const getMinutes = updatedFetchedDate.getMinutes();
      const getSeconds = updatedFetchedDate.getSeconds();
      const getDay = updatedFetchedDate.getDate();
      const getMonth = updatedFetchedDate.getMonth();
      const getYear = updatedFetchedDate.getFullYear();
      const updatedFetchedDateFormatted = `${monthFunct(getMonth)}/${dayFunct(getDay)}/${getYear} ${hourFunct(getHours)}:${minuteFunct(getMinutes)}:${secFunct(getSeconds)}`;
      const updateDateRes = await axios.post(apiUrlProd, { date: updatedFetchedDateFormatted });
      console.log(`${updateDateRes.data.msg}`);
      setIsFetched(false);
      fetchDateData();
    } catch (error) {
      console.log("Error updating Current Date:", error)
    }
  }


  useEffect(() => {
    if (!isFetched) {
      fetchDateData();
    }

    if (examTimeLimit < 1) {
      updateDateFunction();
    }

    const setExamTimerInterval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      examTimeLimit = examTimeLimit - 1;
      setSeconds(()=>Math.floor(examTimeLimit % 60 ));
      setMinutes(()=>Math.floor((examTimeLimit / 60) % 60));
      setHours(()=>Math.floor((examTimeLimit / 3600) % 24));
      setDays(()=>Math.floor(examTimeLimit / 86400));
    }, 1000);

    return () => clearInterval(setExamTimerInterval);

  }, [examTimeLimit, DB_SavedDate])

  return (
    <>
      <mainContext.Provider 
        value={{ hours, minutes, seconds, days, futureDate, active, setActive, 
          menuVisible, setMenuVisible, isAdminClicked, setIsAdminClicked, 
          examTimeLimit, isAuthenticated, setIsAuthenticated }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/dashboard" element={<RegBackend />} />
          </Routes>
        </BrowserRouter>
      </mainContext.Provider>
    </>
  )
}

export default App

