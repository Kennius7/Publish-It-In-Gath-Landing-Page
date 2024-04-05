import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AdminBar = () => {
    const navigate = useNavigate();
    const [errorBtn, setErrorBtn] = useState(false);
    const [adminFormData, setAdminFormData] = useState({
        username: '',
        password: '',
    });


    const handleChange = (e) => {
        setAdminFormData({
            ...adminFormData,
            [e.target.name]: e.target.value,
        });
    }

    const validateForm = () => {
        if (!adminFormData.username || !adminFormData.password) {
            setErrorBtn(true);
            setTimeout(() => { setErrorBtn(false) }, 6000);
            return false
        } else return true
    }

    const handleClick = (e) => {
        e.preventDefault();

        if (validateForm()) {
            if (adminFormData.username === "shosan" && adminFormData.password === "Shosanboggs777") {
                console.log(adminFormData);
                console.log("Login Successful");
                setAdminFormData({
                    username: '',
                    password: '',
                });
                setErrorBtn(false);
                setTimeout(() => { navigate("/dashboard") }, 3000);
            } else {
                console.log(adminFormData);
                console.log("Login Failed");
                setErrorBtn(true);
                setTimeout(() => { setErrorBtn(false) }, 6000);
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
                            text-[16px] text-slate-300 focus:bg-blue-300
                            ${errorBtn ? "bg-red-300" : "bg-slate-200"}`}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminBar