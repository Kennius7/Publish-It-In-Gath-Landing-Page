// import introPics from "../assets/img/intro.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { serviceHighlights } from "./data";



function Intro () {

    const serviceSplideOptions = {
        // width: "90%",
        perPage: 1,
        perMove: 1,
        type: 'loop',
        speed: 1000,
        keyboard: 'global',
        autoplay: true,
        autoplaySpeed: 3000,
        rewind: true,
        rewindSpeed: 2000,
        isNavigation: false,
        arrows: true,
        focus: 0,
        start: 0,
        interval: 4000,
        easing: "linear",
        gap: '0.5rem',
        pagination: false,
        extensions: { AutoScroll },
        autoScroll: {
          speed: 1,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
        padding: '1rem',
        mediaQuery: "min",
        breakpoints: {
          1000: { perPage: 1},
          580: { perPage: 1},
          300: { perPage: 1},
          100: { perPage: 1},
        },
      };

    return (
        <>
            <div className="flex justify-around items-center w-full md:h-[700px] sm:h-[600px] 
                xs:h-[500px] h-[560px]">

                <div className="bg-style w-full h-full flex justify-around items-center">

                    <div className="relative flex sm:flex-row flex-col sm:justify-around justify-center 
                        items-center">

                        <Splide options={serviceSplideOptions}>
                            {serviceHighlights.map((item) => {
                                <SplideSlide key={item.id}>
                                    <div className="flex justify-center items-center box-shadow 
                                        rounded-[10px] overflow-hidden md:w-[550px] md:h-[450px] 
                                        sm:w-[400px] sm:h-[350px] xs:w-[400px] xs:h-[250px] 
                                        w-[90%] h-[220px] bg-red-300">
                                        <img 
                                            src={item.img} 
                                            alt={item.name}
                                            className="w-full h-full object-cover" 
                                        />
                                        <div>Hello</div>
                                    </div>
                                </SplideSlide>
                            })}
                        </Splide>
                        
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



