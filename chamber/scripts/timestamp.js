const now = new Date();

// Date components
const year = now.getFullYear();
// getMonth() is zero-based (0 is January), so add 1
const month = now.getMonth() + 1;
const day = now.getDate(); // Day of the month (1-31)
const dayOfWeek = now.getDay(); // Day of the week (0-6, where 0 is Sunday)

// Time components
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Example of manual formatting: YYYY-MM-DD HH:MM:SS
const formattedManual = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// Output might look like: "2026-02-12 18:59:00"


// Populate form timestamp
document.getElementById('timestamp').value = formattedManual;