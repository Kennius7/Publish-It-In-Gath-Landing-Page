import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mainContext } from "./context/mainContext";
import LandingPage from "./components/LandingPage";
import ScrollToTop from "./ScrollToTop";
import { monthFunct, dayFunct, hourFunct, minuteFunct, secFunct } from "./components/data";



function App() {

  const [active, setActive] = useState("Home");
  const [menuVisible, setMenuVisible] = useState(false);
  const [ifLandingLoaded, setIfLandingLoaded] = useState(false);

  const timeVariable1 = new Date("02/04/2024 07:30:00");
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

  const sevenDaysCount = 604800000;
  let examTimeLimit = (futureCounted - timeTodayCounted)/1000;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {
    const setExamTimerInterval = setInterval(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      examTimeLimit = examTimeLimit - 1;
      setSeconds(()=>Math.floor(examTimeLimit % 60 ));
      setMinutes(()=>Math.floor((examTimeLimit / 60) % 60));
      setHours(()=>Math.floor((examTimeLimit / 3600) % 24));
      setDays(()=>Math.floor(examTimeLimit / 86400));

      if (examTimeLimit < 0) {
        setFutureCounted((prev) => prev + sevenDaysCount);
      }
    }, 1000);

    return () => clearInterval(setExamTimerInterval);

  }, [futureCounted, timeTodayCounted])

  return (
    <>
      <mainContext.Provider 
        value={{ hours, minutes, seconds, days, futureDate, active, setActive, menuVisible, setMenuVisible, 
        ifLandingLoaded, setIfLandingLoaded }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </mainContext.Provider>
    </>
  )
}

export default App

