import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mainContext } from "./context/mainContext";
import LandingPage from "./components/LandingPage";
import ScrollToTop from "./ScrollToTop";



function App() {
  
  // console.log(futureCounted - timeTodayCounted);
  // const [examTimeLimit, setExamTimeLimit] = useState(timeRemaining);
  
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [active, setActive] = useState("Home");
  const [menuVisible, setMenuVisible] = useState(false);
  const [ifLandingLoaded, setIfLandingLoaded] = useState(false);


  useEffect(() => {
    const timeVariable1 = new Date("01/28/2024 07:00:00");
    const timeVariable2 = new Date;
    const timeTodayCounted = timeVariable2.valueOf();
    const futureCounted = timeVariable1.valueOf();
    const sevenDaysCount = 604821410;
    let timeRemaining = (futureCounted - timeTodayCounted)/1000;

    const setExamTimerInterval = setInterval(() => {
        // setExamTimeLimit(() => examTimeLimit - 1);
        setSeconds(()=>Math.floor(timeRemaining % 86400 % 3600 % 60 ));
        setMinutes(()=>Math.floor(timeRemaining % 86400 % 3600 / 60));
        setHours(()=>Math.floor(timeRemaining % 86400 / 3600));
        setDays(()=>Math.floor(timeRemaining / 86400));
    }, 1000);


    if (timeRemaining === 0) {
        timeRemaining = (timeTodayCounted + sevenDaysCount) / 1000;
    }

    return () => {
        setTimeout(() => {
            clearInterval(setExamTimerInterval);
        }, 500);
    }

  })

  return (
    <>
      <mainContext.Provider 
        value={{ hours, minutes, seconds, days, active, setActive, menuVisible, setMenuVisible, 
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

