//! == == == ==>>>Backend Code (Netlify - Production)


// eslint-disable-next-line no-unused-vars
export async function handler(event, context) {
    // Calculate countdown
    const calculateCountdown = () => {
        // Logic to calculate the countdown based on your requirements
        const currentDate = new Date();
        const futureDate = new Date("2024-12-31T23:59:59");
        const countdownSeconds = Math.floor((futureDate - currentDate) / 1000);
        return countdownSeconds;
    };

    // Get countdown
    const countdown = calculateCountdown();

    // Return countdown data
    return {
        statusCode: 200,
        body: JSON.stringify({ countdown })
    };
}




//? == == == ==>>>Frontend Code
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CountdownComponent = () => {
//     const [countdown, setCountdown] = useState(0);

//     useEffect(() => {
//         const fetchCountdown = async () => {
//             try {
//                 const response = await axios.get('/countdown'); // Assuming the server is running on the same host
//                 setCountdown(response.data.countdown);
//             } catch (error) {
//                 console.error('Error fetching countdown:', error);
//             }
//         };

//         fetchCountdown();

//         // Update countdown every second
//         const interval = setInterval(() => {
//             fetchCountdown();
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div>
//             <h1>Countdown: {countdown} seconds</h1>
//         </div>
//     );
// };

// export default CountdownComponent;







