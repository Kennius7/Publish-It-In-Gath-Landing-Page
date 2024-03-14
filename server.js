//! == == == ==>>>Backend Code (Development)

import express from "express";
const app = express();

// Calculate countdown function
function calculateCountdown() {
    // Logic to calculate the countdown based on your requirements
    const currentDate = new Date();
    const futureDate = new Date("2024-12-31T23:59:59");
    const countdownSeconds = Math.floor((futureDate - currentDate) / 1000);
    return countdownSeconds;
}

// API endpoint to serve countdown data
app.get('/countdown', (req, res) => {
    const countdown = calculateCountdown();
    res.json({ countdown });
});

// Start the server
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


