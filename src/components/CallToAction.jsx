// import RegisterButton from "./RegisterButton";
import backgroundPics from "../assets/img/BG4.jpg";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { password } from "../data";
const PIIG_GroupLink = "https://chat.whatsapp.com/CJWMYLMBQkBF8WvtBrOYbr";



function CallToAction() {
    // const Navigate = useNavigate();
    // const passwordAdmin = password;
    // const [clicked, setClicked] = useState(false);
    // const [adminPassword, setAdminPassword] = useState("");

    // const handleChange = (e) => {
    //     setAdminPassword(() => e.target.value);
    // }
    // const handleAdminClick = () => {
    //     setClicked(!clicked);
    // }

    const handleSubmit = () => {
        // adminPassword === passwordAdmin 
        //     ? Navigate("/dashboard") 
        //     : console.log(adminPassword);
        window.open(PIIG_GroupLink, '_blank', 'noreferrer');
    }




  return (
    <>
        <div className="w-full relative bg-slate-200 md:h-[700px] sm:h-[600px] xs:h-[500px] h-[500px]">
            <div className="w-full h-full">
                <img src={backgroundPics} className="w-full h-full object-cover object-bottom opacity-40" />
            </div>

            <div className="flex flex-col justify-between items-center absolute z-1 top-[10%] left-0 
                w-full md:h-[80%] sm:h-[75%] xs:h-[85%] h-[80%]">
                <div className="font-sans font-semibold text-center md:text-[22px] sm:text-[18px] 
                    xs:text-[16px] text-[15px] md:w-[55%] sm:w-[60%] xs:w-[80%] w-[95%]">
                    The world is ever changing so fast. drifting towards the tech zeitgeist. 
                    Position yourself now and equip yourself to compete with the greats in tech 
                    and embrace a future filled with endless possibilities!
                </div>

                <div className="flex flex-col justify-center items-center w-full md:h-[200px] sm:h-[150px] 
                    h-[200px]">

                    <div className="font-poppins font-semibold text-center md:text-[30px] 
                        sm:text-[30px] xs:text-[24px] text-[20px] md:max-w-[800px] sm:max-w-[700px] 
                        xs:max-w-[500px] max-w-[320px] xs:mb-4 mb-[10px]">
                        Book your seats
                    </div>

                    <div className="flex flex-col justify-between items-center w-[450px] h-[400px]">
                        <div className="w-full h-[45px] mb-[15px]">
                            <input 
                                className="w-full h-full rounded-[10px] pl-[8px] outline-none 
                                placeholder:font-sans placeholder:italic placeholder:text-slate-900"
                                placeholder="Full Name"
                                required />
                        </div>
                        <div className="w-full h-[45px] mb-[15px]">
                            <input 
                                className="w-full h-full rounded-[10px] pl-[8px] outline-none 
                                placeholder:font-sans placeholder:italic placeholder:text-slate-900" 
                                placeholder="Home Address"
                                required />
                        </div>
                        <div className="w-full h-[45px] mb-[15px]">
                            <input 
                                className="w-full h-full rounded-[10px] pl-[8px] outline-none 
                                placeholder:font-sans placeholder:italic placeholder:text-slate-900" 
                                placeholder="WhatsApp Number"
                                required />
                        </div>
                        <button 
                            onClick={handleSubmit} 
                            className="font-sans font-semibold tracking-widest w-[50%] h-[45px] rounded-[10px] 
                            text-slate-100 bg-[#c97598] text-[22px] focus:bg-slate-500 focus:text-white mt-[20px]">
                            Book
                        </button>
                    </div>
                </div>

                <div className="font-sans font-semibold text-center italic md:text-[20px] 
                    sm:text-[18px] xs:text-[16px] text-[14px] md:w-[40%] sm:w-[60%] xs:w-[80%] 
                    w-[90%] sm:mt-0 mt-[20px]">
                    Don&apos;t miss out on the opportunity to shape your destiny in the digital realm. 
                    Join our online programming classes and become a master of code!
                </div>
            </div>
        </div>
    </>
  )
}

export default CallToAction