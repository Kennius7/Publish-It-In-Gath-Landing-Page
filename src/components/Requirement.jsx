import { requirementData } from "./data";



function Requirement() {
  return (
    <>
        <div className="flex flex-col md:justify-center justify-start items-center w-full 
          md:h-[650px] sm:h-[600px] xs:h-[650px] h-[870px]">
            <div className="flex flex-col justify-center items-center w-full md:mt-[10px] sm:mt-[30px] 
              xs:mt-[40px] mt-[30px] xs:mb-[40px] mb-[20px]">
              <div className="text-center font-semibold text-slate-700 sm:text-[30px] 
                xs:text-[23px] text-[18px] sm:w-full xs:w-[80%] w-[90%]">
                  What your experience should be like on Sunday...
              </div>
              <div className="text-[20px] text-[#181544] font-sans italic">
                (Pick up time is 7:30AM latest. Don&apos;t miss it, or you miss out!)
              </div>
            </div>

            <ul className="flex xs:flex-row flex-col xs:flex-wrap flex-nowrap justify-around items-center">
              {
                requirementData.map((data)=> (
                  <li key={data.id} 
                    className={`flex justify-center xs:items-center items-center xs:flex-row xs:flex-wrap 
                      flex-nowrap ${data.id === 1 || data.id === 3 ? "flex-row-reverse" : "flex-row"}
                      sm:w-[45%] xs:w-[48%] w-[95%] md:h-[200px] sm:h-[170px] xs:h-[200px] h-[160px] 
                      xs:mb-[30px] mb-[20px]`}>

                    <img 
                      src={data.img} 
                      alt={data.alt}
                      className="md:w-[250px] sm:w-[170px] xs:w-[120px] w-[130px] md:h-[97%] sm:h-[95%] 
                      xs:h-[60%] h-[80%] overflow-hidden object-cover box-shadow rounded-[7px]" />

                    <div className="flex flex-col justify-start items-center md:w-[50%] w-[60%] ml-[30px] 
                      h-[98%]">
                      <div className="font-semibold text-white text-start w-full bg-[#f19ca1] 
                        p-1 rounded-[5px]">
                        {data.id + 1}.&nbsp;&nbsp;{data.title}
                      </div>
                      <div className={`font-sans italic md:text-[15px] sm:text-[16px] xs:text-[14px] text-[15px] 
                        xs:mb-0 mb-[15px] newline leading-[20px]`}>
                        {data.desc}
                      </div>
                    </div>

                  </li>
                ))
              }
            </ul>

        </div>
    </>
    
  )
}

export default Requirement