import { useNavigate } from "react-router-dom";


function SuccessPage() {
const Navigate = useNavigate();

const handleClick = () => {
  Navigate(-1);
}



  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-500">
        <div className="flex flex-col justify-center items-center w-full h-[80dvh] text-[40px]">
          <div className="text-[40px]">
              Success!
          </div>
        </div>
        <div 
          onClick={handleClick}
          className="font-sans font-bold text-[25px] text-white w-full text-center h-[20dvh]">
          Go back
        </div>
      </div>
    </>
  )
}

export default SuccessPage