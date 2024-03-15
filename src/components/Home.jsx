import backgroundPics from "../assets/img/BG4.jpg";
import logo from "../assets/img/Logo.jpg";
import { useContext } from "react";
import { mainContext } from "../context/mainContext";
import { getFullDayFunction, getFullMonthFunction, getYear, getdateNumber } from "./data";
// import RegisterButton from "./RegisterButton";



const Home = () => {
    const { days, hours, minutes, seconds, futureDate } = useContext(mainContext);
    // 🚀🚀🚀

    return (
        <>
            <div className="w-full relative md:h-[580px] sm:h-[600px] xs:h-[400px] h-[350px]">
                <div className="w-full h-full">
                    <img src={backgroundPics} className="w-full h-full object-cover opacity-50" />
                </div>

                <div className="absolute z-1 top-0 left-0 flex flex-col justify-between items-start 
                    w-full h-full">

                    <div className="w-full flex justify-between sm:items-center items-start 
                        md:mb-[60px] sm:mb-[30px] xs:mb-[50px] mb-[20px] sm:pb-4 pb-0 p-1 
                        gradient-background md:h-[12%] sm:h-[13%] xs:h-[25%] h-[15%] pt-1">

                        <div className="flex justify-start items-start w-full h-full">
                            <img 
                                src={logo}
                                alt="logo" 
                                className="md:w-[40px] md:h-[40px] sm:w-[38px] sm:h-[38px] 
                                    xs:w-[30px] xs:h-[30px] w-[24px] h-[24px]" 
                            />
                            <div className="font-poppins font-semibold text-start md:text-[28px] 
                                sm:text-[24px] xs:text-[18px] text-[15px] sm:pl-[10px] pl-[6px] 
                                text-[#f19ca1] navText3">
                                Publish <span className="text-[#c97598]">It In</span> Gath
                            </div>
                        </div>
                        <div className="flex justify-end items-start w-full h-full">
                            <div className="font-sans font-semibold text-end md:text-[22px] 
                                sm:text-[17px] xs:text-[13px] text-[11px] text-[#f0dcd2] 
                                italic sm:leading-normal xs:leading-[16px] 
                                leading-[13px]">
                                Our next service is on {getFullDayFunction(futureDate)},&nbsp;
                                <br className={`md:hidden block`}/>
                                the {getdateNumber(futureDate)}th 
                                of {getFullMonthFunction(futureDate)}, {getYear(futureDate)}&nbsp;
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-between items-center md:h-[80%] sm:h-[75%] 
                        xs:h-[72%] h-[80%] md:pb-0 sm:pb-10 xs:pb-12 pb-4">

                        <div className="w-full flex flex-col justify-center items-center 
                            md:mb-[1%] sm:mb-[1%] xs:mb-0 mb-[1%] md:h-[60%] sm:h-[40%] xs:h-[45%] h-[58%]">

                            <div className="font-poppins font-bold text-center md:text-[39px] 
                                sm:text-[32px] xs:text-[25px] text-[23px] md:max-w-[800px] sm:max-w-[600px] 
                                xs:max-w-[420px] max-w-[360px] text-[#2e150f] navText2
                                sm:mb-0 xs:mb-[3%] mb-[2%] xs:leading-normal leading-[27px]">
                                Welcome to Publish It In Gath
                            </div>

                            <div className="flex flex-wrap justify-center items-center font-poppins 
                                font-semibold text-primary md:mb-[2%] sm:mb-[4%] xs:mb-[14%] 
                                mb-[7%] md:w-full sm:w-[80%] xs:w-full w-[94%]">

                                <div className="text-center md:text-[21px] sm:text-[20px] 
                                    xs:text-[16px] text-[13px] xs:mr-[7px] mr-0 xs:tracking-normal 
                                    tracking-tighter navText2 md:mb-2 sm:mb-1 mb-1 w-full">
                                    An online publicity media and mobilization platform for
                                </div>
                                {/* <br className="md-hidden sm-block hidden" /> */}
                                <div className="text-center md:text-[20px] sm:text-[20px] xs:text-[16px] 
                                    text-[12px] bg-red-600 text-white rounded-[8px] 
                                    md:px-3 sm:px-4 xs:px-2 px-2 py-1 
                                    xs:ml-[6px] ml-0">
                                    <span className="text-yellow-300/70 navText1">
                                        Gospel Pillars Ministries
                                    </span> Expansion
                                </div> 
                                <div className="text-center sm:text-[20px] xs:text-[16px] text-[13px] 
                                    ml-[10px] navText2">
                                    In Lagos!
                                </div>

                            </div>

                        </div>

                        <div className="flex flex-col justify-center items-center w-[100%]">

                            <div className="flex justify-center items-center bg-blue-100 rounded-[10px] 
                                border-[1px] border-yellow-500 md:w-[30%] sm:w-[40%] xs:w-[45%] w-[55%] 
                                xs:mb-[30px] mb-[20px]">
                                <div className="font-sans font-bold text-slate-800 sm:text-[26px] 
                                    xs:text-[18px] text-[16px] my-[5px] tracking-widest">
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




