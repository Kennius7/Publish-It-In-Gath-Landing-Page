import introPics from "../assets/img/intro.jpg";



function Intro () {
    return (
        <>
            <div className="flex justify-around items-center w-full md:h-[700px] sm:h-[600px] 
                xs:h-[500px] h-[560px]">

                <div className="bg-style w-full h-full flex justify-around items-center">

                    <div className="relative flex sm:flex-row flex-col sm:justify-around justify-center 
                        items-center">

                        <div className="flex justify-center items-center box-shadow rounded-[10px] 
                            overflow-hidden md:w-[550px] md:h-[450px] sm:w-[400px] sm:h-[350px] 
                            xs:w-[400px] xs:h-[250px] w-[90%] h-[220px]">
                            <img 
                                src={introPics} 
                                alt="intro pics" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="flex justify-center items-center sm:w-[40%] xs:w-[75%] w-[88%]">
                            <div className="font-poppins font-semibold sm:text-start text-center text-slate-700
                                md:text-[28px] sm:text-[20px] xs:text-[16px] text-[15px] sm:mt-0 
                                xs:mt-[20px] mt-[40px]">
                                Join us for an awesome time of worship, word ministration, and prophetic impartation 
                                at the <br/>
                                <span className="text-[#c09e40] navText3">
                                    Ark of Light For All Nations
                                </span>, <br/> Gospel Pillars Ministries, <br/>
                                <span className="font-sans font-bold text-[24px] italic underline">
                                    11C, Kudirat Abiola way, Alausa, Ikeja, Lagos.
                                </span>
                                <br/> <br className="sm:block xs:hidden block" />
                                <span className="font-sans font-semibold text-[23px] italic">
                                    Whether you&apos;re a staunch follower of Christ who is looking for a place of worship,
                                    or you are a newcomer to the Christian faith and you need a guiding hand, we believe you&apos;ve 
                                    come to the right place.
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Intro



