

// function Home() {
//     return (
//         <>
//             <div className="landing-page">
//                 <header>
//                     <h1>Welcome to Our Church</h1>
//                     <p>Join us for a time of worship, fellowship, and community.</p>
//                 </header>
//                 <section className="about-section">
//                     <h2>About Us</h2>
//                     <p>
//                         We are a community of believers dedicated to growing in our faith,
//                         supporting one another, and spreading the love of Christ.
//                     </p>
//                 </section>
//                 <section className="event-section">
//                     <h2>Upcoming Event</h2>
//                     <p>
//                         Join us for our next worship service on Sunday at 10:00 AM. We look
//                         forward to having you with us!
//                     </p>
//                 </section>
//                 <section className="contact-section">
//                     <h2>Contact Us</h2>
//                     <p>
//                         If you have any questions or need more information, feel free to
//                         reach out to us.
//                     </p>
//                     <button>Contact Us</button>
//                 </section>
//                 <footer>
//                     <p>&copy; 2024 Our Church. All rights reserved.</p>
//                 </footer>
//             </div>
//         </>
//     )
// }

// export default Home





















import backgroundPics from "../assets/img/BG4.jpg";
import logo from "../assets/img/Logo.jpg";
import { useContext } from "react";
import { mainContext } from "../context/mainContext";
import { getFullDayFunction, getFullMonthFunction, getYear, getdateNumber } from "./data";
// import RegisterButton from "./RegisterButton";



const Home = () => {
    const { days, hours, minutes, seconds, futureDate } = useContext(mainContext);
    // console.log(new Date("02/09/2024 07:30:00").toUTCString());
    // const dayString = new Date("02/03/2024 07:30:00").getDay();
    // 🚀🚀🚀

    return (
        <>
            <div className="w-full relative md:h-[500px] sm:h-[600px] xs:h-[500px] h-[400px]">
                <div className="w-full h-full">
                    <img src={backgroundPics} className="w-full h-full object-cover opacity-50" />
                </div>

                <div className="absolute z-1 top-0 left-0 flex flex-col justify-between items-start 
                    w-full h-full pb-[20px]">

                    <div className="w-full flex justify-between items-center md:mb-[60px] sm:mb-[30px] 
                        xs:mb-[40px] mb-[20px] sm:pb-4 p-1 gradient-background sm:h-[80px] h-[50px]">
                        <div className="flex justify-start items-center">
                            <img 
                                src={logo}
                                alt="logo" 
                                className="md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] 
                                    xs:w-[30px] xs:h-[30px] w-[24px] h-[24px]" 
                            />
                            <div className="font-poppins font-semibold text-start md:text-[28px] sm:text-[20px] 
                                xs:text-[16px] text-[13px] sm:pl-[10px] pl-[6px] text-[#f19ca1] navText3">
                                Publish <span className="text-[#c97598]">It In</span> Gath
                            </div>
                        </div>
                        <div>
                            <div className="font-sans text-end sm:text-[16px] xs:text-[13px] text-[10px] 
                                text-[#f0dcd2] italic pr-[4px]">
                                Our next service is on {getFullDayFunction(futureDate)},&nbsp;
                                <br className={`md:hidden block`}/>
                                the {getdateNumber(futureDate)}th of {getFullMonthFunction(futureDate)}, {getYear(futureDate)}
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-between items-center h-[80%]">

                        <div className="w-full flex flex-col justify-center items-center 
                            md:mb-[1%] sm:mb-[3%] xs:mb-[4%] mb-[3%] h-[60%]">

                            <div className="font-poppins font-bold text-center md:text-[39px] 
                                sm:text-[32px] xs:text-[24px] text-[20px] md:max-w-[800px] sm:max-w-[600px] 
                                xs:max-w-[420px] max-w-[320px] md:mb-0 text-[#2e150f] navText2
                                sm:mb-[1%] xs:mb-[3%] mb-[2%] xs:leading-normal leading-[27px]">
                                Welcome to Publish It In Gath
                            </div>

                            <div className="flex flex-wrap justify-center items-center font-poppins font-semibold 
                                text-primary md:mb-[2%] sm:mb-[8%] xs:mb-[14%] mb-[7%] xs:w-full w-[90%]">

                                <div className="text-center sm:text-[18px] xs:text-[16px] text-[16px] 
                                    mr-[7px] xs:tracking-normal tracking-tighter navText2">
                                    An online publicity media and mobilization platform for
                                </div>

                                <div className="text-center md:w-[350px] sm:w-[230px] xs:w-[180px] w-[180px] 
                                    md:text-[19px] sm:text-[20px] xs:text-[16px] text-[16px] bg-red-600 
                                    text-white rounded-[8px] px-2 py-1 xs:ml-[6px] ml-[3px]">
                                    <span className="text-yellow-300/70 navText1">
                                        Gospel Pillars Ministries
                                    </span> Expansion
                                </div> 
                                <div className="text-center sm:text-[20px] xs:text-[16px] text-[17px] 
                                    ml-[10px] navText2">
                                    In Lagos!
                                </div>

                            </div>

                            {/* <div className="flex justify-center items-center font-poppins font-semibold">
                                <div className="font-sans text-center italic text-[19px] text-black">
                                    Scroll below to contact us
                                </div>
                            </div> */}

                        </div>

                        <div className="flex flex-col justify-center items-center w-[100%]">

                            <div className="flex justify-center items-center bg-blue-100 rounded-[10px] 
                                border-[1px] border-yellow-500 md:w-[30%] sm:w-[30%] xs:w-[35%] w-[45%] 
                                my-[15px]">
                                <div className="font-sans font-bold text-slate-800 sm:text-[26px] 
                                    xs:text-[20px] text-[16px] my-[5px] tracking-widest">
                                    NEXT TAKE OFF IN
                                </div>
                            </div>

                            <div className="flex justify-around items-center xs:w-[70%] w-[90%]">

                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex justify-center items-center bg-primary box-shadow 
                                        border-yellow-400 border-[1px] rounded-[20%] sm:w-[100px] 
                                        sm:h-[100px] xs:w-[70px] xs:h-[70px] w-[60px] h-[60px]">
                                        <span className="font-poppins font-semibold text-white 
                                            text-center sm:text-[40px] xs:text-[24px] text-[25px]">
                                            {days}
                                        </span>
                                    </div>
                                    <span className="flex justify-center items-center font-bold 
                                        sm:text-[18px] xs:text-[13px] text-[12px] mt-[10px]">
                                        DAY<span className={`${days === 0 || days === 1 ? "hidden" : "block"}`}>S</span>
                                    </span>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex justify-center items-center bg-primary box-shadow 
                                        border-yellow-400 border-[1px] rounded-[20%] sm:w-[100px] 
                                        sm:h-[100px] xs:w-[70px] xs:h-[70px] w-[60px] h-[60px]">
                                        <span className="font-poppins font-semibold text-white 
                                            text-center sm:text-[40px] xs:text-[24px] text-[25px]">
                                            {hours}
                                        </span>
                                    </div>
                                    <span className="flex justify-center items-center font-bold 
                                        sm:text-[18px] xs:text-[13px] text-[12px] mt-[10px]">
                                        HOUR<span className={`${hours === 0 || hours === 1 ? "hidden" : "block"}`}>S</span>
                                    </span>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex justify-center items-center bg-primary box-shadow 
                                        border-yellow-400 border-[1px] rounded-[20%] sm:w-[100px] 
                                        sm:h-[100px] xs:w-[70px] xs:h-[70px] w-[60px] h-[60px]">
                                        <span className="font-poppins font-semibold text-white 
                                            text-center sm:text-[40px] xs:text-[24px] text-[25px]">
                                            {minutes}
                                        </span>
                                    </div>
                                    <span className="flex justify-center items-center font-bold 
                                        sm:text-[18px] xs:text-[13px] text-[12px] mt-[10px]">
                                        MINUTE<span className={`${minutes === 0 || minutes === 1 ? "hidden" : "block"}`}>S</span>
                                    </span>
                                </div>

                                <div className="flex flex-col justify-center items-center">
                                    <div className="flex justify-center items-center bg-primary box-shadow 
                                        border-yellow-400 border-[1px] rounded-[20%] sm:w-[100px] 
                                        sm:h-[100px] xs:w-[70px] xs:h-[70px] w-[60px] h-[60px]">
                                        <span className="font-poppins font-semibold text-white 
                                            text-center sm:text-[40px] xs:text-[24px] text-[25px]">
                                            {seconds}
                                        </span>
                                    </div>
                                    <span className="flex justify-center items-center font-bold 
                                        sm:text-[18px] xs:text-[13px] text-[12px] mt-[10px]">
                                        SECOND<span className={`${seconds === 0 || seconds === 1 ? "hidden" : "block"}`}>S</span>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home




