import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from "../../FirebaseConfig";
import backgroundPics from "../assets/img/BG4.jpg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import { whatsAppWebClient } from "whatsapp-web.js";
import { sendWhatsappMessage } from "./data";

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
    const whatSappMessage = "I want to know more about this.";
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

    const verifyWhatSappNumber = async (num) => {
        console.log("Verifying...");
        const sanitizedNum = "234" + num.toString().slice(1)
        console.log(sanitizedNum);
        // const client = whatsAppWebClient.Client();
        // const numberDetails = await client.getNumberId(sanitizedNum);
        // if(numberDetails) {
        //     console.log("Sending message to ", numberDetails);
        //     /* send message */
        //     return true;
        // } else {
        //     console.log(sanitizedNum, "Mobile no is not registered on Whatsapp");
        //     return false;
        // }
    }


    // const apiUrl = "https://shosan-computer-based-test.netlify.app/.netlify/functions/api/send-email";
    // const homeLink = "/";
    // const checkResultEmail = "ogbogukenny@yahoo.com";
    // const to = auth.currentUser?.email;
    // const captureRef = useRef(null);
    // // @ts-ignore
    // const studentName = auth.currentUser?.displayName.split(" ")[0];
    // const { scoreText } = useContext(AppContext);
    // const [imageUrl, setImageUrl] = useState("");
    // const [printButtonText, setPrintButtonText] = useState("Print Test Score");
    // const [mailto, setMailto] = useState<Array<string>>([]);
    
    // const subject = "TEST SCORE PRINTOUT";


    // const printScore = async () => {
    //     setPrintButtonText("Printing...");
    //     if (captureRef.current) {
    //         if (to === checkResultEmail) {
    //             setMailto([to]);
    //             // @ts-ignore
    //         } else { setMailto([checkResultEmail, to]) }
    //         // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //         html2canvas(captureRef.current).then((canvas: any) => {
    //             const screenshotData = canvas.toDataURL("image/png");
    //             // Create an anchor element to download the image
    //             const a = document.createElement('a');
    //             a.href = screenshotData;
    //             a.download = 'screenshot.png';
    //             setImageUrl(()=>screenshotData);
    //             a.click();
    //             setTimeout(() => setPrintButtonText("Printout Saved Locally"), 1000);
    //             setTimeout(() => setPrintButtonText("Printing..."), 3000);
    //         })

    //         // Create an HTML email with the embedded image
    //         const htmlEmail = `
    //         <html>
    //             <body>
    //             <p>Here is a printout of your test score, ${studentName}. You scored ${scoreText}/100. Try again next time</p>
    //             <img src="${imageUrl}" alt="Embedded Score Image" />
    //             </body>
    //         </html>
    //         `;

    //         const formData = new FormData();
    //         // @ts-ignore
    //         formData.append('to', mailto);
    //         formData.append('subject', subject);
    //         // formData.append('text', text);
    //         // formData.append('attachment', attachment);
    //         formData.append('html', htmlEmail);

    //         try {
    //             const response = await fetch(apiUrl, {
    //               method: 'POST',
    //               body: formData,
    //             });
          
    //             if (response.ok) {
    //               console.log('Email sent successfully');
    //               setPrintButtonText("Print Sent to Email");
    //               setTimeout(() => setPrintButtonText("Print Test Score"), 5000);
    //             //   console.log(htmlEmail);
    //             } else {
    //               console.error('Email sending failed');
    //               setPrintButtonText("Print to Email Failed");
    //               setTimeout(() => setPrintButtonText("Click Here Again"), 3000);
    //               setTimeout(() => setPrintButtonText("Print Test Score"), 7000);
    //             }
    //         } catch (error) {
    //             console.error('An error occurred:', error);
    //             setPrintButtonText("Print Error");
    //             setTimeout(() => setPrintButtonText("Click Here Again"), 3000);
    //             setTimeout(() => setPrintButtonText("Print Test Score"), 7000);
    //         }
    //     }
    // }



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
        if (!verifyWhatSappNumber(formData.number)) {
            errors.number = "Number not on Whatsapp.";
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
                const sanitizedNumber = "234" + formData.number.toString().slice(1);
                console.log(sanitizedNumber);
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
                    setTimeout(() => {
                        sendWhatsappMessage(sanitizedNumber, whatSappMessage, formData.fullName);
                    }, 6000);
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
        <div className="w-full relative bg-slate-200 md:h-[900px] sm:h-[800px] xs:h-[700px] h-[750px]">
            <div className="w-full h-full">
                <img src={backgroundPics} className="w-full h-full object-cover object-bottom opacity-40" />
            </div>

            <div className="flex flex-col justify-between items-center absolute z-1 xs:top-[10%] 
                top-[6%] left-0 w-full md:h-[80%] sm:h-[75%] xs:h-[87%] h-[85%]">
                <div className="font-sans font-semibold text-center md:text-[22px] sm:text-[18px] 
                    xs:text-[16px] text-[15px] md:w-[55%] sm:w-[60%] xs:w-[80%] w-[95%]">
                    The world is ever changing so fast. drifting towards the tech zeitgeist. 
                    Position yourself now and equip yourself to compete with the greats in tech 
                    and embrace a future filled with endless possibilities!
                </div>

                <div className="flex flex-col justify-center items-center md:w-[50%] sm:w-[55%] 
                    xs:w-[75%] w-[96%] md:h-[90%] sm:h-[90%] xs:h-[90%] h-[92%] xs:bg-slate-600/50 
                    bg-slate-600/60 my-[30px] xs:rounded-[7px] rounded-[6px] 
                    md:py-0 sm:py-4 xs:py-1 py-3">

                    <div className="font-poppins font-semibold text-center navText2 md:text-[30px] 
                        sm:text-[27px] xs:text-[20px] text-[22px] md:mb-4 sm:mb-2 xs:mb-4 mb-6">
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