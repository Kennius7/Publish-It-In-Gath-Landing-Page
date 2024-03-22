import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from "../../FirebaseConfig";
import backgroundPics from "../assets/img/BG4.jpg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// const PIIG_GroupLink = "https://chat.whatsapp.com/CJWMYLMBQkBF8WvtBrOYbr";



function CallToAction() {
    const Navigate = useNavigate();
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
    const numberRegex = /[0-9]/;
    const fullNameRegex = /\s/;
    // const docRefExample = "28lvUKGP3Mv8jvq32sU8";

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
        // if (formData.number.length === 11) {
        //     setErrorNumUI(false);
        //     errors.number = '';
        //     setFormData({
        //         ...formData,
        //         number: e.target.value,
        //     });
        // }
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        console.log(formData);
        
        if (validateForm()) {
            if (navigator.onLine) {
                console.log("App online");
                console.log("Registering...");
                const regDataRef = collection(db, "PIIG_Registrations");
                addDoc(regDataRef, {
                    fullName: formData.fullName,
                    address: formData.address,
                    number: parseInt(formData.number.toString().slice(1)),
                    createdAt: Timestamp.now().toDate(),
                    regID: generateHighestId(PIIGData),
                }).then(()=>{
                    console.log("Registration successful");
                    // toast("Registration successful", { type: "success" });
                    setTimeout(() => {
                        setSubmitText("Book Seat");
                        setIsSubmit(false);
                    }, 2000);
                    setTimeout(() => {
                        Navigate("/success");
                    }, 4000);
                }).catch((error)=>{
                    console.log(`Error Registering: ${error}`);
                    // toast("Error Registering", { type: "error" });
                    setTimeout(() => {
                        setSubmitText("Book Seat");
                        setIsSubmit(false);
                    }, 2000);
                })
            }
            if (!navigator.onLine) {
                console.log("App offline");
                setTimeout(() => {
                    setSubmitText("Book Seat");
                    setIsSubmit(false);
                }, 2000);
            }
        }
        // window.open(PIIG_GroupLink, '_blank', 'noreferrer');
    }




  return (
    <>
        <div className="w-full relative bg-slate-200 md:h-[900px] sm:h-[600px] xs:h-[500px] h-[500px]">
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

                <div className="flex flex-col justify-center items-center 
                    md:w-[50%] sm:w-[60%] xs:w-[60%] w-full md:h-[90%] sm:h-[450px] 
                    h-[500px] bg-slate-600/50 my-[30px] rounded-[7px]">

                    <div className="font-poppins font-semibold text-center md:text-[30px] 
                        sm:text-[30px] xs:text-[24px] text-[20px] xs:mb-4 mb-[10px]">
                        Book your seats
                    </div>

                    <form 
                        className="flex flex-col justify-between items-center md:w-[80%] w-[98%] 
                        md:h-[70%] h-[400px]"
                        onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-between items-center md:w-full w-[98%] 
                            md:h-full h-[300px]">
                            <div className="w-full h-[35%] mb-[20px]">
                                <input 
                                    className={`w-full h-[80%] rounded-[7px] pl-[8px] outline-none 
                                    placeholder:font-sans placeholder:italic placeholder:text-slate-500 
                                    border-2
                                    ${errorNameUI ? "border-red-300" : "border-white"}`}
                                    placeholder="Full Name"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}/>
                                {
                                    errors.fullName && 
                                    <p 
                                        className="font-sans text-red-300 w-full h-[20%] text-[15px] 
                                        italic pl-2">
                                        {errors.fullName}
                                    </p>
                                }
                            </div>
                            <div className="w-full h-[35%] mb-[20px]">
                                <input 
                                    className="w-full h-[80%] rounded-[7px] pl-[8px] outline-none 
                                    placeholder:font-sans placeholder:italic placeholder:text-slate-500" 
                                    placeholder="Home Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}/>
                                {
                                    errors.address && 
                                    <p className="font-sans text-red-300 w-full h-[20%] text-[15px] 
                                    italic pl-2">
                                        {errors.address}
                                    </p>
                                }
                            </div>
                            <div className="w-full h-[35%] mb-[20px]">
                                <input 
                                    className={`w-full h-[80%] rounded-[7px] pl-[8px] outline-none 
                                    placeholder:font-sans placeholder:italic placeholder:text-slate-500
                                    border-2
                                    ${errorNumUI ? "border-red-300" : "border-white"}`}
                                    placeholder="WhatsApp Number"
                                    maxLength={11}
                                    name="number"
                                    value={formData.number}
                                    onChange={handleNumberChange}/>
                                {
                                    errors.number && 
                                    <p className="font-sans text-red-300 w-full h-[20%] text-[15px] 
                                    italic pl-2">
                                        {errors.number}
                                    </p>
                                }
                            </div>
                        </div>
                        <div 
                            className="flex flex-col justify-center items-center w-[50%] h-[55px] 
                            rounded-[12px] text-slate-100 bg-[#c97598] mt-[40px]">
                            {
                                !isSubmit
                                    ?   <button
                                            type="submit"
                                            className="font-sans font-semibold tracking-widest mb-[5px]
                                            text-[22px] focus:bg-slate-500 focus:text-white">
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