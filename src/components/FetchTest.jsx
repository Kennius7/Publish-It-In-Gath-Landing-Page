import { useState } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";



const FetchTest = () => {
    const [buttonText, setButtonText] = useState("Fetch Data");
    const [isFetched, setIsFetched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);

        try {
            if (!isFetched) {
                const response = await axios.get('https://publishitingath.netlify.app/.netlify/functions/api/test');
                setButtonText(response.data.msg);
                console.log("Success Testing");
                setIsFetched(true);
                setIsLoading(false);
            } else { 
                setButtonText("Fetch Data");
                setIsFetched(false);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setButtonText("Fetch Error");
            setIsLoading(false);
            setTimeout(() => {
                setTimeout(() => {
                    setIsLoading(false);
                    setButtonText("Fetch Data");
                }, 6000);
                setIsLoading(true);
            }, 2000);
        }
    }



    return (
        <>
            <div className="flex flex-col justify-around items-center w-full h-[200px]">
                <div className="text-[26px] tracking-[3px]">
                    Fetch Test Page
                </div>
                <div className="flex flex-col justify-center items-center bg-red-300 
                    rounded-[10px] w-[40%] h-[40%]">
                    {
                        isLoading 
                            ?   <div className='flex justify-center items-center rotate'>
                                    <AiOutlineLoading3Quarters size={26} color="white" />
                                </div> 
                            :   <button 
                                    className="font-sans italic text-[25px] w-full h-full"
                                    onClick={handleClick}>
                                    {buttonText}
                                </button>
                    
                    }
                </div>
            </div>
        </>
    )
}

export default FetchTest
