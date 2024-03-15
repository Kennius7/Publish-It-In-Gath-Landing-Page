// import introPics from "../assets/img/intro.jpg";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/css";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import { serviceHighlights } from "./data";
import introVid from "../assets/vid/gospel_pillars_intro_vid.mp4";


function Intro () {

    // const serviceSplideOptions = {
    //     // width: "90%",
    //     perPage: 1,
    //     perMove: 1,
    //     type: 'loop',
    //     speed: 1000,
    //     keyboard: 'global',
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     rewind: true,
    //     rewindSpeed: 2000,
    //     isNavigation: false,
    //     arrows: false,
    //     focus: 0,
    //     start: 0,
    //     interval: 4000,
    //     easing: "linear",
    //     gap: '0.5rem',
    //     pagination: false,
    //     extensions: { AutoScroll },
    //     autoScroll: {
    //       speed: 1,
    //       pauseOnHover: false,
    //       pauseOnFocus: false,
    //     },
    //     padding: '1rem',
    //     mediaQuery: "min",
    //     breakpoints: {
    //       1000: { perPage: 2},
    //       580: { perPage: 2},
    //       300: { perPage: 1},
    //       100: { perPage: 1},
    //     },
    //   };

    return (
        <>
            <div className="flex justify-around items-center w-full md:h-[600px] sm:h-[450px] 
                xs:h-[320px] h-[450px] gradient-background">

                <div className="w-full h-full flex justify-around items-center">

                    <div className="flex xs:flex-row flex-col sm:justify-around justify-start 
                        xs:items-start items-center w-full h-full md:mt-[80px] sm:mt-[50px] 
                        xs:mt-[60px] mt-[5%]">

                        <div className="sm:w-[54%] xs:w-[60%] w-[94%] h-[47%]">
                            <video 
                                src={introVid} autoPlay muted loop playsInline 
                                width="800" height="400"
                                className="w-full object-cover md:h-[450px] sm:h-[300px] xs:h-[200px]
                                h-[200px] rounded-[7px]" />
                        </div>
                        <div className="flex flex-col justify-between items-start sm:w-[45%] 
                            xs:w-[40%] w-full md:h-[75%] sm:h-[70%] xs:h-[60%] h-[45%] sm:py-3 
                            xs:py-0 py-1 pl-2">
                            <div className="font-poppins font-semibold xs:text-start text-center 
                                text-slate-100 md:text-[23px] sm:text-[17px] xs:text-[13px] 
                                text-[15px] mt-0 tracking-tighter w-full h-full 
                                sm:leading-normal xs:leading-[18px] leading-normal">
                                Join us for an awesome time of worship, word ministration, and 
                                prophetic impartation at the <br/>
                                <span className="xs:text-[#c09e40] text-[#7e6728] xs:navText3">
                                    Ark of Light For All Nations,
                                </span> Gospel Pillars Ministries, <br/>
                                <span className="font-sans font-bold md:text-[20px] sm:text-[17px] 
                                    xs:text-[11px] text-[15px] italic underline">
                                    11C, Kudirat Abiola way, Alausa, Ikeja, Lagos.
                                </span>
                            </div>
                            <div className="font-sans font-semibold text-slate-800 sm:w-[90%] 
                                w-[98%] italic xs:text-start text-center md:leading-normal 
                                sm:leading-[22px] xs:leading-[14px] leading-normal">
                                <span className=" md:text-[23px] sm:text-[18px] xs:text-[12px] text-[14px]">
                                    Whether you&apos;re a staunch follower of Christ who is looking 
                                    for a place of worship, or you are a newcomer to the Christian 
                                    faith and you need a guiding hand, you&apos;ve come to the right place.
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



