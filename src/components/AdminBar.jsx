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
                console.log(adminCred.data.msg);
                setAdminFormData({
                    username: '',
                    password: '',
                });
                setIsAuthenticated(true);
                setErrorBtn(false);
                setTimeout(() => { navigate("/dashboard") }, 1000);
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
            <div className="flex flex-col justify-center items-end w-full bg-slate-200">
                <div className="flex flex-col justify-center items-start sm:w-[30%] w-full">
                    <div className="mr-[10px] text-slate-300">
                        Admin:
                    </div>
                    <div className="flex justify-between items-center w-full h-[30px]">
                        <input 
                            type="text" 
                            name="username"
                            placeholder="Username"
                            value={adminFormData.username}
                            onChange={handleChange}
                            className="w-[31%] rounded-[8px] h-full bg-slate-200 
                            outline-none placeholder:text-slate-300" />
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Password"
                            value={adminFormData.password}
                            onChange={handleChange}
                            className="w-[31%] rounded-[8px] h-full bg-slate-200 
                            outline-none placeholder:text-slate-300" />
                        <button 
                            onClick={handleClick} 
                            className={`w-[31%] h-full rounded-[8px] outline-none 
                            text-[16px] text-slate-300
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