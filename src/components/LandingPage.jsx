// import { useContext, useEffect } from "react";
// import { mainContext } from "../context/mainContext";
import { Home, Intro, Requirement, CallToAction } from "./index";
// import Home from "./Home";





function LandingPage() {
  // const { setIfLandingLoaded } = useContext(mainContext);

  // useEffect(() => {
  //   setIfLandingLoaded(true);
  // }, [setIfLandingLoaded]);
  

  return (
    <>
        <Home/>
        <Intro/>
        <Requirement/>
        <CallToAction/>
        {/* <CourseList/>
        <BulletPoints/> */}
    </>
  )
}

export default LandingPage




