function toggledarkmode() {
    let root = document.documentElement; // <html>
    let body = document.body;
    let icon = document.querySelector(".darkmodebutton");

    root.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        if (icon) icon.src = "images/icon-moon.png";
        localStorage.setItem("theme", "dark");
    } else {
        if (icon) icon.src = "images/icon-sun.png";
        localStorage.setItem("theme", "light");
    }
}

// disable transitions immediately
document.documentElement.classList.add("no-transition");

window.onload = function () {
    let savedTheme = localStorage.getItem("theme");
    let root = document.documentElement;
    let body = document.body;
    let icon = document.querySelector(".darkmodebutton");

    if (savedTheme === "dark") {
        root.classList.add("dark-mode");
        body.classList.add("dark-mode");
        if (icon) icon.src = "images/icon-moon.png";
    }

    // re-enable transitions AFTER page loads
    setTimeout(() => {
        document.documentElement.classList.remove("no-transition");
    }, 50);
};

function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    clock.textContent = `${hours}:${minutes}${ampm}`;
}

setInterval(updateClock, 1000);

updateClock();

function updateDayDisplay() {
    const now = new Date();

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    const dayName = weekdays[now.getDay()];    // "Wednesday"
    const monthName = months[now.getMonth()];  // "March"
    const dayNumber = now.getDate();           // 1-31

    const formatted = `${dayName}, ${monthName} ${dayNumber}`;

    document.getElementById("dayDisplay").textContent = formatted;
}

// initialize immediately
updateDayDisplay();

// update every hour just in case day changes at midnight
setInterval(updateDayDisplay, 3600000);