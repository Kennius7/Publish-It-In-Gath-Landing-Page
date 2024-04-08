import { useState, useEffect, useContext } from "react";
import { mainContext } from "../context/mainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const AdminBar = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(mainContext);
    const [errorBtn, setErrorBtn] = useState(false);
    const [adminFormData, setAdminFormData] = useState({
        username: '',
        password: '',
    });
    const [adminCred, setAdminCred] = useState({});
    const [submitText, setSubmitText] = useState("Submit");
    const apiUrlProd = "https://piig-server.netlify.app/.netlify/functions/api/passadmin";
    // const apiUrlDev = "http://localhost:3001/passadmin";



    useEffect(() => {
        const fetchCredData = async () => {
            try {
                const admincredData = await axios.get(apiUrlProd);
                console.log(admincredData);
                setAdminCred(admincredData);
                if (
                    admincredData.data.data.userName.length < 1 
                    && admincredData.data.data.userName.length < 1
                    ) {
                        setTimeout(() => {
                            console.log(adminCred.data.userName);
                            console.log("Polling...");
                            fetchCredData();
                    }, 10000);
                }
                console.log(adminCred.data.msg);
            } catch (error) {
                console.error(`Error fetching Credentials: ${error}`);
            }
        }
        fetchCredData();
    }, [])


    const handleChange = (e) => {
        setAdminFormData({
            ...adminFormData,
            [e.target.name]: e.target.value,
        });
    }

    const validateForm = () => {
        if (!adminFormData.username || !adminFormData.password) {
            setErrorBtn(true);
            setSubmitText("Error");
            console.log("Login Failed");
            setTimeout(() => { 
                setSubmitText("Submit"); 
                setErrorBtn(false) 
            }, 6000);
            setTimeout(() => { setErrorBtn(false) }, 6000);
            return false
        } else return true
    }

    const handleClick = (e) => {
        e.preventDefault();

        if (validateForm()) {
            if (
                adminFormData.username === adminCred.data.data.userName 
                && adminFormData.password === adminCred.data.data.password
                ) {
                setSubmitText("Submitting...");
                console.log(adminCred.data.msg);
                setAdminFormData({
                    username: '',
                    password: '',
                });
                setIsAuthenticated(true);
                setErrorBtn(false);
                setTimeout(() => { setSubmitText("Success") }, 2000);
                setTimeout(() => { navigate("/dashboard") }, 4000);
            } else {
                console.log(adminCred.data.data.errMsg);
                setSubmitText("Error");
                setErrorBtn(true);
                setTimeout(() => { 
                    setSubmitText("Submit"); 
                    setErrorBtn(false) 
                }, 6000);
            }
        }
    }


    return (
        <>
            <div className="flex flex-col justify-center items-center md:w-[30%] sm:w-[40%] 
                xs:w-[60%] w-[90%] md:h-[200px] sm:h-[190px] xs:h-[180px] h-[150px] 
                bg-slate-700/95 rounded-[12px]">
                <div className="flex flex-col justify-around items-center w-full h-[95%]">
                    <div className="text-slate-300 md:w-[90%] w-[85%] md:text-[16px] text-[13px]">
                        Admin Section:
                    </div>
                    <div className="flex flex-col justify-around items-center w-full h-[80%]">
                        <input 
                            type="text" 
                            name="username"
                            placeholder="Username"
                            value={adminFormData.username}
                            onChange={handleChange}
                            className="md:w-[90%] w-[85%] sm:h-[29%] xs:h-[25%] h-[23%] 
                            rounded-[8px] bg-slate-200 outline-none 
                            placeholder:text-slate-600/70 placeholder:italic 
                            placeholder:font-sans pl-[10px] md:text-[16px] text-[13px]" />
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Password"
                            value={adminFormData.password}
                            onChange={handleChange}
                            className="md:w-[90%] w-[85%] sm:h-[29%] xs:h-[25%] h-[23%] 
                            rounded-[8px] bg-slate-200 outline-none 
                            placeholder:text-slate-600/70 placeholder:italic 
                            placeholder:font-sans pl-[10px] md:text-[16px] text-[13px]" />
                        <button 
                            onClick={handleClick} 
                            className={`font-sans md:w-[50%] w-[40%] sm:h-[20%] xs:h-[24%] h-[25%] 
                            rounded-[8px] outline-none sm:text-[16px] text-[14px] 
                            text-slate-600 italic
                            ${errorBtn ? "bg-red-300" : "bg-blue-200"}`}>
                            {submitText}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminBar