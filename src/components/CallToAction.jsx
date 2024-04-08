import { useState, useEffect, useContext } from "react";
import { mainContext } from "../context/mainContext";
// import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from "../../FirebaseConfig";
import backgroundPics from "../assets/img/BG4.jpg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { AdminBar } from "./index";



function CallToAction() {
    // const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        number: ''
    });
    const [submitText, setSubmitText] = useState("Book Seat");
    const [isSubmit, setIsSubmit] = useState(false);
    const [errors, setErrors] = useState({});
    const [PIIGData, setPIIGData] = useState([]);
    const [errorNumUI, setErrorNumUI] = useState(false);
    const [errorNameUI, setErrorNameUI] = useState(false);
    const [adminBtnText, setAdminBtnText] = useState("Admin Enter");
    const { isAdminClicked, setIsAdminClicked } = useContext(mainContext);
    const numberRegex = /[0-9]/;
    const fullNameRegex = /\s/;
    const apiUrlProd = "https://piig-server.netlify.app/.netlify/functions/api/send-email";
    // const apiUrlDev = "http://localhost:3001/send-email";
    const timeout = 30000;


    useEffect(() => {
        const PIIG_DataRef = collection(db, "PIIG_Registrations");
        const q = query(PIIG_DataRef, orderBy("createdAt", "desc"));
    
        onSnapshot(q, (snapshot) => {
            const PIIG_Data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            setPIIGData(PIIG_Data);
        })
    }, [])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleNumberChange = (e) => {
        if (formData.number.length === 0) {
            setErrorNumUI(false);
            errors.number = '';
            setFormData({
                ...formData,
                number: e.target.value,
            });
            return
        }
        if (formData.number.length > 0 && formData.number.length < 10) {
            setErrorNumUI(true);
            errors.number = 'Number must be eleven (11) digits';
            setFormData({
                ...formData,
                number: e.target.value,
            });
            return
        }
        if (formData.number.length > 10) {
            setErrorNumUI(true);
            errors.number = 'Number must be eleven (11) digits';
            setFormData({
                ...formData,
                number: e.target.value,
            });
            return
        }
        setErrorNumUI(false);
        errors.number = '';
        setFormData({
            ...formData,
            number: e.target.value,
        });
    }

    const SignUpTimeOut = () => {
        setTimeout(() => {
            setSubmitText("Book Seat");
            setIsSubmit(false);
            setTimeout(() => {
                setErrors({});
            }, 12000);
        }, 1000);
    }

    const validateForm = () => {
        const errors = {};

        // Validate name
        if (!formData.fullName) {
            errors.fullName = 'Full Name is required';
            SignUpTimeOut();
        }
        if (!fullNameRegex.test(formData.fullName)) {
            setErrorNameUI(true);
            errors.fullName = 'Ensure First Name and Surname are present';
            SignUpTimeOut();
            setTimeout(() => {
                setErrorNameUI(false);
            }, 13000);
        }

        // Validate home address
        if (!formData.address) {
            errors.address = 'Address is required';
            SignUpTimeOut();
        }

        // Validate phone number
        if (!numberRegex.test(parseInt(formData.number.toString()))) {
            errors.number = 'Valid number is required';
            SignUpTimeOut();
        }

        if (formData.number === "" || formData.number === "+234") {
            errors.number = 'Please type in a Phone number';
            SignUpTimeOut();
        }

        setErrors(errors);

        // Return true if there are no errors
        return Object.keys(errors).length === 0;
    };

    const generateHighestId = (arr) => {
        if (arr.length === 0) {
            return 0
        } 
        if (arr.length > 0) {
            const ids = arr.map(item => item.regID);
            const highestId = Math.max(...ids);
            return (highestId + 1);
        }
    }



    const sendEmailForm = async () => {
        try {
            const response = await axios.post(apiUrlProd, formData, { timeout })
            console.log(`${response.data.emailMessage}`);
            setIsSubmit(false);
            setSubmitText("Registered");
            toast(response.data.formMessage, { type: "success" });
            setTimeout(() => setSubmitText("Book Seat"), 4000);
        } catch (error) {
            if (error.code === "ECONNABORTED") {
                setIsSubmit(false);
                console.error(`Sending took too long: ${error}`);
                setSubmitText("Took Too Long");
                toast(error.data.timeoutMessage, { type: "error" });
                setTimeout(() => setSubmitText("Try Again"), 3000);
                setTimeout(() => setSubmitText("Book Seat"), 7000);
            } else {
                setIsSubmit(false);
                console.error(`Email sending failed: ${error}`);
                setSubmitText("Registration Failed");
                toast(error.data.errorMessage, { type: "error" });
                setTimeout(() => setSubmitText("Try Again"), 3000);
                setTimeout(() => setSubmitText("Book Seat"), 7000);
            }
        }
    }





    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        console.log(formData);
        
        if (validateForm()) {
            if (navigator.onLine) {
                const sanitizedNumber = "234" + formData.number.toString().slice(1);
                console.log(sanitizedNumber);
                console.log("App online");
                toast("Booking...", { type: "info" });
                console.log("Registering...");
                const regDataRef = collection(db, "PIIG_Registrations");
                addDoc(regDataRef, {
                    fullName: formData.fullName,
                    address: formData.address,
                    number: parseInt(formData.number.toString().slice(1)),
                    createdAt: Timestamp.now().toDate(),
                    regID: generateHighestId(PIIGData),
                }).then(()=>{
                    sendEmailForm();
                }).catch((error)=>{
                    console.log(`Error Registering: ${error}`);
                    toast("Error Registering", { type: "error" });
                    setTimeout(() => {
                        setIsSubmit(false);
                        setSubmitText("Book Seat");
                    }, 2000);
                })
            }
            if (!navigator.onLine) {
                console.log("App offline");
                toast("It seems you're offline", { type: "warning" });
                setTimeout(() => {
                    setSubmitText("Book Seat");
                    setIsSubmit(false);
                }, 2000);
            }
        }
    }

    const handleAdminClick = () => {
        setIsAdminClicked(!isAdminClicked);
        if (isAdminClicked) {
            setAdminBtnText("Clicked");
        } else setAdminBtnText("Admin Enter");
    }




  return (
    <>
        <div className="w-full relative bg-slate-200 md:h-[1100px] sm:h-[1000px] 
            xs:h-[900px] h-[1000px]">
            <div className="w-full h-full">
                <img src={backgroundPics} className="w-full h-full object-cover object-bottom opacity-40" />
            </div>

            <div className="flex flex-col justify-start items-center absolute z-1 md:top-[3%] 
                sm:top-[4%] xs:top-[3%] top-[4%] left-0 w-full h-full">
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="font-sans font-bold text-center text-red-800 
                        sm:text-[30px] xs:text-[26px] text-[24px]">
                        Please Note:
                    </div>
                    <hr className="w-[50%] border-[2px] border-red-900" />
                    <div className="font-sans font-semibold italic text-center text-black 
                        md:text-[22px] sm:text-[19px] xs:text-[17px] text-[15px] md:w-[50%] 
                        sm:w-[70%] xs:w-[80%] w-[95%] navText2 mt-[10px] md:leading-[26px] 
                        sm:leading-[24px] xs:leading-[20px] leading-[24px]">
                        Ensure to fill out the form below correctly before booking as this will
                        enable us to reach you and confirm your seat on the said day of departure 
                        for service!
                        <br/> <br/>
                        This will also help with the disbursement of gifts and other benefits. 
                        We do encourage being open to participating fully in the worship, 
                        ministration and the word sections of service as our mission is to see 
                        you grow body, soul, and spirit and come back with testimonies!
                        <br/> <br/>
                        God bless you and establish you as you come!
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center md:w-[50%] sm:w-[70%] 
                    xs:w-[80%] w-[96%] md:h-[500px] sm:h-[470px] xs:h-[400px] h-[400px] 
                    xs:bg-slate-600/50 bg-slate-600/60 my-[20px] xs:rounded-[7px] rounded-[6px] 
                    md:py-0 sm:py-4 xs:py-1 py-3">

                    <div className="font-poppins font-semibold text-center navText2 md:text-[30px] 
                        sm:text-[27px] xs:text-[24px] text-[22px] md:mb-4 sm:mb-2 xs:mb-4 mb-6">
                        Book your seats
                    </div>

                    <form 
                        className="flex flex-col md:justify-between sm:justify-around xs:justify-between 
                        justify-around items-center md:w-[80%] sm:w-[98%] xs:w-[92%] w-[98%] md:h-[70%] 
                        sm:h-[90%] xs:h-[65%] h-[80%]"
                        onSubmit={handleSubmit}>
                        <div className="flex flex-col xs:justify-between justify-around items-center 
                            md:w-full sm:w-[96%] xs:w-full w-[95%] md:h-full sm:h-[65%] 
                            xs:h-[70%] h-[70%]">
                            <div className="w-full md:h-[35%] sm:h-[28%] xs:h-[28%] h-[23%] 
                                md:mb-[20px] sm:mb-0 mb-1">
                                <input 
                                    className={`w-full h-[80%] rounded-[7px] xs:pl-[8px] pl-[4px] 
                                    outline-none placeholder:font-sans placeholder:italic 
                                    placeholder:text-slate-400 border-2 placeholder:md:text-[20px] 
                                    placeholder:sm:text-[18px] placeholder:xs:text-[14px] 
                                    placeholder:text-[13px]
                                    ${errorNameUI ? "border-red-300" : "border-white"}`}
                                    placeholder="Full Name, Eg. John Doe"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}/>
                                {
                                    errors.fullName && 
                                    <p 
                                        className="font-sans text-red-300 w-full h-[20%] md:text-[15px] 
                                        sm:text-[13px] xs:text-[12px] text-[13px] italic pl-2 navText1">
                                        {errors.fullName}
                                    </p>
                                }
                            </div>
                            <div className="w-full md:h-[35%] sm:h-[28%] xs:h-[28%] h-[23%] 
                                md:mb-[20px] sm:mb-0 mb-1">
                                <input 
                                    className="w-full h-[80%] rounded-[7px] xs:pl-[8px] pl-[4px] 
                                    outline-none placeholder:font-sans placeholder:italic 
                                    placeholder:text-slate-400 placeholder:md:text-[20px] 
                                    placeholder:sm:text-[18px] placeholder:xs:text-[14px] 
                                    placeholder:text-[13px]" 
                                    placeholder="Home Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}/>
                                {
                                    errors.address && 
                                    <p className="font-sans text-red-300 w-full h-[20%] md:text-[15px] 
                                    sm:text-[13px] xs:text-[12px] text-[13px] italic pl-2 navText1">
                                        {errors.address}
                                    </p>
                                }
                            </div>
                            <div className="w-full md:h-[35%] sm:h-[28%] xs:h-[28%] h-[23%] 
                                md:mb-[20px] sm:mb-0 mb-1">
                                <input 
                                    className={`w-full h-[80%] rounded-[7px] xs:pl-[8px] pl-[4px] 
                                    outline-none placeholder:font-sans placeholder:italic 
                                    placeholder:text-slate-400 border-2 placeholder:md:text-[20px] 
                                    placeholder:sm:text-[18px] placeholder:xs:text-[14px] 
                                    placeholder:text-[13px]
                                    ${errorNumUI ? "border-red-300" : "border-white"}`}
                                    placeholder="WhatsApp Number, Eg. 08025002500"
                                    maxLength={11}
                                    name="number"
                                    value={formData.number}
                                    onChange={handleNumberChange}/>
                                {
                                    errors.number && 
                                    <p className="font-sans text-red-300 w-full h-[20%] md:text-[15px] 
                                    sm:text-[13px] xs:text-[12px] text-[13px] italic pl-2 navText1">
                                        {errors.number}
                                    </p>
                                }
                            </div>
                        </div>
                        <div 
                            className={`flex justify-center items-center md:w-[50%] sm:w-[45%] xs:w-[50%] 
                            w-[45%] md:h-[55px] sm:h-[45px] xs:h-[35px] h-[40px] xs:rounded-[12px] 
                            rounded-[7px] text-slate-100 
                            ${!isSubmit ? "bg-[#c97598]" : "bg-[#a85f7d]"} 
                            md:mt-[40px] xs:mt-0 mt-8`}>
                            {
                                !isSubmit
                                    ?   <button
                                            type="submit"
                                            className="font-sans font-semibold tracking-widest sm:mb-[5px] 
                                            xs:mb-[2px] mb-0 md:text-[22px] sm:text-[20px] xs:text-[18px] 
                                            text-[16px] hover:bg-slate-500 hover:text-white w-full 
                                            h-full rounded-[12px] hover:mb-0 duration-200">
                                            {submitText}
                                        </button>
                                    :   <div className='flex justify-center items-center rotate'>
                                            <AiOutlineLoading3Quarters size={24} color="white" />
                                        </div>
                            }
                        </div>
                    </form>
                </div>

                <div className="font-sans font-semibold text-center italic md:text-[20px] 
                    sm:text-[18px] xs:text-[16px] text-[14px] md:w-[40%] sm:w-[60%] xs:w-[70%] 
                    w-[80%] sm:mt-0 mt-[20px]">
                    Don&apos;t miss out on the opportunity to shape your destiny! 
                    To reach us you can contact us at this number: 08055549979 or at this email: 
                    shosanacodemia@gmail.com
                </div>
                <div className="relative flex justify-center items-center w-full sm:mt-[80px] 
                xs:mt-[50px] mt-[60px]">
                    <button
                        onClick={handleAdminClick}
                        className="font-sans bg-blue-300/40 text-slate-600/20 
                        md:text-[14px] sm:text-[12px] xs:text-[10px] mb-[40px]
                        text-[8px] rounded-[12px] duration-1000 px-[20px] py-[3px]">
                        {adminBtnText}
                    </button>
                    <div 
                        className={`absolute z-3 w-full md:bottom-[100%] bottom-[120%] flex 
                        justify-center items-center
                        ${!isAdminClicked ? "hidden" : "block"}`}>
                        <AdminBar/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CallToAction