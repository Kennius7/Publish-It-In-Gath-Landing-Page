import { ojuelegba, dropoff, worship, study } from "../assets/img";




const imageDesc = {
    laptop: "First, we would be picking you up for free at Ojuelegba Bus stop. Ensure you are on location on or before 7:30AM as we would be taking off for Church shortly after.\n\nPlease fill your details where applicable so we can identify you and reach out to you for information updates and follow ups.",
    worship: "Then, you get to enjoy the powerful ministrations of worship, praise, the word of God, and prophetic impartations, all in the presence of God.\n\nPlease open your heart to receive all God has for you and engage the word, and we strongly believe you would come back with a testimony.",
    dropoff: "Then you would be dropped off at your location, at the end of the service.",
    gift: "Gifts will be given to those who were first timers at end of service. Also, newcomers will be catered for.",
}

export const requirementData = [
    { id: 0, alt: "Ojuelegba Pics", img: ojuelegba, title: "Ojuelegba Pickup", desc: imageDesc.laptop, },
    { id: 1, alt: "Worship Pics", img: worship, title: "Worship Experience", desc: imageDesc.worship, },
    { id: 2, alt: "Drop Off Pics", img: dropoff, title: "Drop Off", desc: imageDesc.dropoff, },
    { id: 3, alt: "Gift Pics", img: study, title: "Gifts And Follow Ups", desc: imageDesc.gift, },
]


// export const sideBarData = [
//   {
//     id: 0,
//     name: "Home",
//   },
//   {
//     id: 1,
//     name: "Profile",
//   },
//   {
//     id: 2,
//     name: "Courses",
//   },
//   {
//     id: 3,
//     name: "Content",
//   },
// ]

// export const rightDropDownData = [
//   {
//     id: 0,
//     name: "Back to Sign In Page",
//     link: "/login",
//   },
//   {
//     id: 1,
//     name: "Edit Registration Data",
//     link: "/login",
//   },
//   {
//     id: 2,
//     name: "Join Whatsapp Group",
//     link: "",
//   },
//   {
//     id: 3,
//     name: "Sign Out",
//     link: "/login",
//   },
// ]

// export const openWhatsappLink = () => {
//   const phoneNumber = '2348055549979';
//   const message = 'Hello, how can we help you?';
//   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//   window.open(whatsappURL, '_blank', 'noreferrer');
// }

// const data = {
//   labels: [
//     'Basic Web Development', 'Front End Development', 
//     'Back End Development', 'Mobile App Development', 'Python',
//   ],
//   datasets: [
//     {
//       label: 'No. of weeks',
//       data: [4, 8, 8, 8, 6 ],
//       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//       borderColor: 'rgba(75, 192, 192, 1)',
//       borderWidth: 1,
//     },
//   ],
// };

// export const config = {
//   type: 'bar',
//   data: data,
// };



// export default courses;
// export const password = "Shosanboggs7#";

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


