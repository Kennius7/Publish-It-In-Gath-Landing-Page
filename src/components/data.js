import { ojuelegba, dropoff, worship, gift, features01, 
    features02, features03, features04, features05, features06 } from "../assets/img";




const imageDesc = {
    laptop: "First, we would be picking you up for free at Ojuelegba Bus stop. Ensure you are on location on or before 7:30AM as we would be taking off for church shortly after.\nPlease fill your details where applicable so we can identify you and reach out to you for information updates and follow ups.",
    worship: "Then, you get to enjoy the powerful ministrations of worship, praise, the word of God, and prophetic impartations, all in the presence of God.\nOpen your heart to receive all God has for you and engage the word, and we strongly believe you would come back with a testimony.",
    dropoff: "Then you would be dropped off at your location, after the end of the service. Be sure to stay communicated to as to where the bus is, or if there would be announcements.\nWhether it be arrivals, or departures, punctuality and comfort in the house of God are our watchwords.",
    gift: "Gifts, foodpacks, or equivalents will be given to those who were first timers at end of service. Also, we will recognize and award consistent and committed member who came through this system.",
}

export const requirementData = [
    { id: 0, alt: "Ojuelegba Pics", img: ojuelegba, title: "Ojuelegba Pickup", desc: imageDesc.laptop, },
    { id: 1, alt: "Worship Pics", img: worship, title: "Worship Experience", desc: imageDesc.worship, },
    { id: 2, alt: "Drop Off Pics", img: dropoff, title: "Drop Off", desc: imageDesc.dropoff, },
    { id: 3, alt: "Gift Pics", img: gift, title: "Gifts And Follow Ups", desc: imageDesc.gift, },
]


export const getdateNumber = (dateString) => {
    const dateNumber = new Date(dateString).getUTCDate();
    return dateNumber;
}

export const getFullDayFunction = (dateString) => {
    const dayStringData = new Date(dateString).toUTCString();
    const isSundayIncluded = dayStringData.includes("Sun");
    const isMondayIncluded = dayStringData.includes("Mon");
    const isTuesdayIncluded = dayStringData.includes("Tue");
    const isWednesdayIncluded = dayStringData.includes("Wed");
    const isThursdayIncluded = dayStringData.includes("Thu");
    const isFridayIncluded = dayStringData.includes("Fri");
    const isSaturdayIncluded = dayStringData.includes("Sat");
    if (isSundayIncluded) {
        return "Sunday";
    }
    if (isMondayIncluded) {
        return "Monday";
    }
    if (isTuesdayIncluded) {
        return "Tuesday";
    }
    if (isWednesdayIncluded) {
        return "Wednesday";
    }
    if (isThursdayIncluded) {
        return "Thursday";
    }
    if (isFridayIncluded) {
        return "Friday";
    }
    if (isSaturdayIncluded) {
        return "Saturday";
    }
}

export const getFullMonthFunction = (dateString) => {
    const monthStringData = new Date(dateString).toUTCString();
    const isJanuaryIncluded = monthStringData.includes("Jan");
    const isFebruaryIncluded = monthStringData.includes("Feb");
    const isMarchIncluded = monthStringData.includes("Mar");
    const isAprilIncluded = monthStringData.includes("Apr");
    const isMayIncluded = monthStringData.includes("May");
    const isJuneIncluded = monthStringData.includes("Jun");
    const isJulyIncluded = monthStringData.includes("Jul");
    const isAugustIncluded = monthStringData.includes("Aug");
    const isSeptemberIncluded = monthStringData.includes("Sep");
    const isOctoberIncluded = monthStringData.includes("Oct");
    const isNovemberIncluded = monthStringData.includes("Nov");
    const isDecemberIncluded = monthStringData.includes("Dec");
    if (isJanuaryIncluded) {
        return "January";
    }
    if (isFebruaryIncluded) {
        return "February";
    }
    if (isMarchIncluded) {
        return "March";
    }
    if (isAprilIncluded) {
        return "April";
    }
    if (isMayIncluded) {
        return "May";
    }
    if (isJuneIncluded) {
        return "June";
    }
    if (isJulyIncluded) {
        return "July";
    }
    if (isAugustIncluded) {
        return "August";
    }
    if (isSeptemberIncluded) {
        return "September";
    }
    if (isOctoberIncluded) {
        return "October";
    }
    if (isNovemberIncluded) {
        return "November";
    }
    if (isDecemberIncluded) {
        return "December";
    }
}

export const getYear = (dateString) => {
    const fullYear = new Date(dateString).getUTCFullYear();
    return fullYear;
}

export const monthFunct = (mon) => {
    if (mon <= 9) {
        return `0${mon + 1}`;
    } else return mon;
}

export const dayFunct = (day) => {
    if (day <= 9) {
        return `0${day}`;
    } else return day;
}

export const hourFunct = (hr) => {
    if (hr <= 9) {
        return `0${hr}`;
    } else return hr;
}

export const minuteFunct = (min) => {
    if (min <= 9) {
        return `0${min}`;
    } else return min;
}

export const secFunct = (sec) => {
    if (sec <= 9) {
        return `0${sec}`;
    } else return sec;
}


export const serviceHighlights = [
    {
      id: 0,
      name: "Expert Tutoring",
      title: "Learn from professionals with years of hands-on experience. Our instructors are passionate about guiding you through the ins and outs of programming, ensuring you gain real-world insights",
      img: features01,
    },
    {
      id: 1,
      name: "Comprehensive Curriculum",
      title: "Stay ahead of the curve with a curriculum designed to cover the latest programming languages, frameworks, and industry trends. From Python to JavaScript, we've got you covered",
      img: features02,
    },
    {
      id: 2,
      name: "Flexible Learning",
      title: "Life is busy, and we get it! Our online classes are structured to fit your schedule. Learn at your own pace, from the comfort of your home, and access course materials 24/7",
      img: features03,
    },
    {
      id: 3,
      name: "Hands-On Projects",
      title: "Put theory into practice with engaging, hands-on projects that reinforce your learning. Build a portfolio of impressive projects to showcase your skills to future employers",
      img: features04,
    },
    {
      id: 4,
      name: "Community Support",
      title: "Join a vibrant community of learners, exchange ideas, and get help when you need it. Our dedicated support team and forums ensure you're never alone on your coding journey",
      img: features05,
    },
    {
      id: 5,
      name: "Career Guidance",
      title: "Looking to land that dream job in tech? Our courses come with valuable career guidance, including resume reviews, interview tips, and networking opportunities",
      img: features06,
    },
];

const timeVariable = "07:30:00";

export const sundayDates2024 = [
    {date: `01/07/2024 ${timeVariable}`}, {date: `01/14/2024 ${timeVariable}`}, 
    {date: `01/21/2024 ${timeVariable}`}, {date: `01/28/2024 ${timeVariable}`}, 
    {date: `02/04/2024 ${timeVariable}`}, {date: `02/11/2024 ${timeVariable}`}, 
    {date: `02/18/2024 ${timeVariable}`}, {date: `02/25/2024 ${timeVariable}`}, 
    {date: `03/03/2024 ${timeVariable}`}, {date: `03/10/2024 ${timeVariable}`}, 
    {date: `03/17/2024 ${timeVariable}`}, {date: `03/24/2024 ${timeVariable}`}, 
    {date: `03/31/2024 ${timeVariable}`}, {date: `04/07/2024 ${timeVariable}`}, 
    {date: `04/14/2024 ${timeVariable}`}, {date: `04/21/2024 ${timeVariable}`}, 
    {date: `04/28/2024 ${timeVariable}`}, {date: `05/05/2024 ${timeVariable}`}, 
    {date: `05/12/2024 ${timeVariable}`}, {date: `05/19/2024 ${timeVariable}`}, 
    {date: `05/26/2024 ${timeVariable}`}, {date: `06/02/2024 ${timeVariable}`}, 
    {date: `06/09/2024 ${timeVariable}`}, {date: `06/16/2024 ${timeVariable}`}, 
    {date: `06/23/2024 ${timeVariable}`}, {date: `06/31/2024 ${timeVariable}`}, 
    {date: `07/07/2024 ${timeVariable}`}, {date: `07/14/2024 ${timeVariable}`}, 
    {date: `07/21/2024 ${timeVariable}`}, {date: `07/28/2024 ${timeVariable}`}, 
    {date: `08/04/2024 ${timeVariable}`}, {date: `08/11/2024 ${timeVariable}`}, 
    {date: `08/18/2024 ${timeVariable}`}, {date: `08/25/2024 ${timeVariable}`}, 
    {date: `09/01/2024 ${timeVariable}`}, {date: `09/08/2024 ${timeVariable}`}, 
    {date: `09/15/2024 ${timeVariable}`}, {date: `09/22/2024 ${timeVariable}`}, 
    {date: `09/29/2024 ${timeVariable}`}, {date: `10/06/2024 ${timeVariable}`}, 
    {date: `10/13/2024 ${timeVariable}`}, {date: `10/20/2024 ${timeVariable}`}, 
    {date: `10/27/2024 ${timeVariable}`}, {date: `11/03/2024 ${timeVariable}`}, 
    {date: `11/10/2024 ${timeVariable}`}, {date: `11/17/2024 ${timeVariable}`}, 
    {date: `11/24/2024 ${timeVariable}`}, {date: `12/01/2024 ${timeVariable}`}, 
    {date: `12/08/2024 ${timeVariable}`}, {date: `12/15/2024 ${timeVariable}`},
    {date: `12/22/2024 ${timeVariable}`}, {date: `12/29/2024 ${timeVariable}`},
];


// export const text = "We believe in discipleship and growth and pray that beyond what we can give, God blesses you and causes you to increase on every side."


export const openWhatsappLink = (sanitizedWhatSappNum, message) => {
//   const phoneNumber = '2348055549979';
//   const message = 'Hello, how can we help you?';
  const whatsappURL = `https://wa.me/${sanitizedWhatSappNum}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank', 'noreferrer');
}


