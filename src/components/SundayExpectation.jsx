import { requirementData } from "./data";



function SundayExpectation() {
  return (
    <>
        <div className="flex flex-col md:justify-around justify-start items-center w-full 
          md:h-[680px] sm:h-[600px] xs:h-[1900px] h-[2100px]">
            <div className="flex flex-col justify-center items-center w-full md:mt-0 sm:mt-[30px] 
              xs:mt-[40px] mt-[30px] md:mb-[5px] xs:mb-[40px] mb-[50px]">
              <div className="text-center font-semibold text-slate-700 sm:text-[30px] 
                xs:text-[23px] text-[18px] sm:w-full xs:w-[80%] w-[90%]">
                  What To Expect on Sunday Morning
              </div>
              <div className="text-[#181544] font-sans italic sm:text-[20px] xs:text-[17px] 
                text-[15px] sm:tracking-normal tracking-tight">
                (Pick up time is 7:30AM latest. Don&apos;t miss it, or you miss out!)
              </div>
            </div>

            <ul className="flex sm:flex-row flex-col sm:flex-wrap flex-nowrap justify-around items-center">
              {
                requirementData.map((data)=> (
                  <li key={data.id} 
                    className={`flex sm:flex-row flex-col sm:flex-wrap flex-nowrap sm:justify-center 
                      justify-start xs:items-center items-center md:w-[45%] sm:w-[50%] xs:w-[98%] w-[99%] 
                      md:h-[200px] sm:h-[150px] xs:h-[350px] h-[450px] md:mb-[30px] xs:mb-[80px] mb-[40px]`}>

                    <img 
                      src={data.img} 
                      alt={data.alt}
                      className="md:w-[43%] sm:w-[45%] xs:w-[80%] w-[94%] md:h-[97%] sm:h-[95%] 
                      xs:h-[70%] h-[60%] overflow-hidden object-cover box-shadow rounded-[7px]" />

                    <div className="flex flex-col justify-start items-center md:w-[50%] sm:w-[45%] 
                      xs:w-[80%] w-[94%] sm:ml-[30px] ml-0 sm:h-[98%] xs:h-[30%] h-[40%]">
                      <div className="font-semibold text-white text-start w-full bg-[#f19ca1] 
                        md:p-1 p-0 md:pl-2 pl-1 rounded-[5px] md:text-[20px] sm:text-[14px] xs:text-[20px] 
                        text-[20px] sm:mt-0 mt-[20px]">
                        {data.id + 1}.&nbsp;&nbsp;{data.title}
                      </div>
                      <div className={`font-sans italic md:text-[15px] sm:text-[13px] xs:text-[14px] 
                        text-[15px] xs:mb-0 mb-[15px] newline md:leading-[22px] sm:leading-[15px] 
                        leading-[22px] sm:mt-0 xs:mt-[8px] mt-[6px]`}>
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

export default SundayExpectation
