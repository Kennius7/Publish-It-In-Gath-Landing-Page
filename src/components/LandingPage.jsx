import { useContext } from "react";
import { mainContext } from "../context/mainContext";
import { Home, Intro, SundayExpectation, CallToAction } from "./index";
// import Home from "./Home";





function LandingPage() {
  const { dateLoaded } = useContext(mainContext);

  // useEffect(() => {
  //   setIfLandingLoaded(true);
  // }, [setIfLandingLoaded]);
  

  return (
    <>
      { !dateLoaded ? 
        <div className="w-full h-dvh flex flex-row justify-center items-center text-[30px] 
          font-semibold zoom-in-out-element">
          Loading...
        </div> : 
        <div>
          <Home/>
          <Intro/>
          <SundayExpectation/>
          <CallToAction/>
          {/* <FetchTest/> */}
          {/* <CourseList/>
          <BulletPoints/> */}
        </div>
      }
    </>
  )
}

export default LandingPage




