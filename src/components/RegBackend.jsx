import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { mainContext } from "../context/mainContext";
import { BlankPage } from "./index";
import { collection, onSnapshot, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
import { db } from "../../FirebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillDelete } from "react-icons/ai";



const RegBackend = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(mainContext);
    const [regData, setRegData] = useState([]);


    useEffect(() => {
        if (!isAuthenticated) {
            setTimeout(() => { navigate("/") }, 3000);
        }

        const regDataRef = collection(db, "PIIG_Registrations");
        const q = query(regDataRef, orderBy("createdAt", "desc"));

        onSnapshot(q, (snapshot) => {
            const regDataFireBase = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setRegData(regDataFireBase.reverse());
        })

    }, [regData.length, isAuthenticated, navigate])


    const handleDelete = async (data) => {
        try {
            if (window.confirm(`Are you sure you want to delete this entry: ${data.fullName}?`)) {
                deleteDoc(doc(db, "PIIG_Registrations", data.id))
                toast("Registration data deleted successfully", { type: "success" });
            }
        } catch (error) {
            console.log(error);
            toast("Error deleting user data!", { type: "error" })
        }
    }




    return (
        <>
            <div>
                {
                    !isAuthenticated
                        ? <BlankPage />
                        : <div className="flex flex-col justify-center items-center w-full">
                            <div className="flex flex-col justify-start items-center w-full h-[100dvh]">
                                <div className="font-sans font-semibold text-[30px] tracking-[3px]">
                                    Applicant Data List
                                </div>
                                <div className="flex justify-center items-center w-full">
                                    <div className="font-sans font-semibold text-[24px] tracking-[4px]">
                                        List of Applicants
                                    </div>
                                    <div className="font-sans font-semibold text-[20px] tracking-[2px]">
                                        ( Number of Applicants: {regData.length} )
                                    </div>
                                </div>
                                <hr className="w-[70%] border-[2px] border-red-400 mb-[20px] mt-[10px]"/>

                                <table className="sm:w-[95%] xs:w-[98%] w-[99%] min-h-[100px] 
                                    bg-slate-100 rounded-[7px]">
                                    <thead className="w-full">
                                        <tr className="bg-blue-200 sm:h-[40px] xs:h-[30px] h-[28px]">
                                            <th className="font-semibold text-start sm:text-[15px] 
                                            xs:text-[11px] text-[9px]">
                                                S/N
                                            </th>
                                            <th className="font-semibold text-start sm:text-[15px] 
                                            xs:text-[12px] text-[10px]">
                                                Full Name
                                            </th>
                                            <th className="font-semibold text-start sm:text-[15px] 
                                            xs:text-[12px] text-[10px]">
                                                WhatsApp Number
                                            </th>
                                            <th className="font-semibold text-start sm:text-[15px] 
                                            xs:text-[12px] text-[10px]">
                                                Home Address
                                            </th>
                                            <th className="font-semibold text-start sm:text-[15px] 
                                            xs:text-[12px] text-[10px]">
                                                Time Registered
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="w-full bg-slate-100">
                                        {regData.map((reg) => (
                                            <tr
                                                key={reg.regID}
                                                className={`bg-yellow-100 sm:h-[50px] xs:h-[30px] 
                                                h-[25px] border-[1px] border-slate-300
                                                    ${reg.regID === reg.length - 1
                                                        ? "mb-0"
                                                        : "sm:mb-[20px] xs:mb-[10px] mb-[20px]"}`}>

                                                <td className="font-poppins text-start sm:text-[13px] 
                                                xs:text-[12px] text-[12px] xs:w-[2%] w-[3%] sm:pl-[10px] 
                                                xs:pl-[2px] pl-[1px]">
                                                    {reg.regID + 1}
                                                </td>
                                                <td className="text-start sm:text-[14px] xs:text-[11px] 
                                                text-[9px] xs:w-[15%] w-[49%]">
                                                    {reg.fullName}
                                                </td>
                                                <td className="font-mono text-start sm:text-[14px] 
                                                xs:text-[11px] text-[9px] xs:w-[8%] w-[20%] italic">
                                                    {reg.number}
                                                </td>
                                                <td className="font-mono text-start sm:text-[14px] 
                                                xs:text-[11px] text-[9px] xs:w-[25%] w-[18%] italic">
                                                    {reg.address}
                                                </td>
                                                <td className="xs:w-[12%] w-[10%]">
                                                    <div className="flex flex-row justify-between">
                                                        <div className="text-start sm:text-[14px] 
                                                        xs:text-[11px] text-[9px] w-[80%]">
                                                            {
                                                                reg.createdAt.toDate().toLocaleTimeString() 
                                                                + " " + ":" + " " + 
                                                                reg.createdAt.toDate().toDateString()
                                                            }
                                                        </div>
                                                        <div
                                                            onClick={() => handleDelete(reg)}
                                                            className="flex justify-center items-center 
                                                            cursor-pointer w-[20%]">
                                                            <AiFillDelete 
                                                                name="AiFillDelete" 
                                                                size={24} 
                                                                color="black" />
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button
                                    onClick={() => navigate(-1)}
                                    className="bg-red-200 rounded-[10px] w-[150px] h-[30px] mt-[20px]">
                                    Back
                                </button>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default RegBackend