import { useState } from "react";
import axios from "axios";



const FetchTest = () => {
    const [buttonText, setButtonText] = useState("Fetch Data");

    const handleClick = async () => {
        try {
            // Assuming the server is running on the same host
            const response = await axios.get('http://localhost:3001/test');
            setButtonText(response.data.msg);
        } catch (error) {
            console.error('Error fetching countdown:', error);
        }
    }



    return (
        <>
            <div className="flex flex-col justify-around items-center w-full h-[200px]">
                <div className="text-[26px]">
                    FetchTest Page
                </div>
                <div>
                    <button 
                        className="text-[25px] bg-red-300 rounded-[8px]" 
                        onClick={handleClick}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </>
    )
}

export default FetchTest
