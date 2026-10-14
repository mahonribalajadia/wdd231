const messageElement = document.getElementById("visit-message");

const currentVisit = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (lastVisit === null) {
    // First visit
    messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the time since the previous visit
    const timeDifference = currentVisit - Number(lastVisit);

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysBetweenVisits = Math.floor(
        timeDifference / millisecondsPerDay
    );

    if (timeDifference < millisecondsPerDay) {
        // Returned in less than 24 hours
        messageElement.textContent = "Back so soon! Awesome!";
    } else {
        // Returned after one or more days
        const dayWord = daysBetweenVisits === 1 ? "day" : "days";

        messageElement.textContent =
            `You last visited ${daysBetweenVisits} ${dayWord} ago.`;
    }
}

// Save the current visit time for the next visit
localStorage.setItem("lastVisit", currentVisit);
