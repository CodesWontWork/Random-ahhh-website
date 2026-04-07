function toggledarkmode() {
    let root = document.documentElement;
    let icon = document.querySelector(".darkmodebutton");

    root.classList.toggle("dark-mode");

    if (root.classList.contains("dark-mode")) {
        if (icon) icon.src = "images/icon-moon.png";
        localStorage.setItem("theme", "dark");
    } else {
        if (icon) icon.src = "images/icon-sun.png";
        localStorage.setItem("theme", "light");
    }
}

document.documentElement.classList.add("no-transition");

window.onload = function () {
    let icon = document.querySelector(".darkmodebutton");
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" && icon) {
        icon.src = "images/icon-moon.png";
    }

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

    const dayName = weekdays[now.getDay()];  
    const monthName = months[now.getMonth()];  
    const dayNumber = now.getDate();           

    const formatted = `${dayName}, ${monthName} ${dayNumber}`;

    document.getElementById("dayDisplay").textContent = formatted;
}

updateDayDisplay();
setInterval(updateDayDisplay, 3600000);

function thanks() {
    let name = prompt("What's your name?:")
    alert("Thank You " + name + " For The Feeback!")
}

function areyousure() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let confirmText = 
        "Please confirm your details:\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Message: " + message + "\n\n" +
        "Is this correct?";

    return confirm(confirmText);
}

function toggleText(btn) {
    const textElement = document.getElementById("clickable-text");
    if (textElement.textContent === "Don't click this button -> ") {
        textElement.textContent = "We're no strangers to love~ You know the rules and so do I~ A full commitment's what I'm thinking of~ You wouldn't get this from any other guy... ";
    } else {
        textElement.textContent = "Don't click this button -> ";
    }

    if (btn.textContent === "Click me") {
        btn.textContent = "Rickrolled lol";
    } else {
        btn.textContent = "Click me";
    }
}

let playingsound = false;

function playsound() {
    let sound = document.getElementById("sound");
    sound.volume = 0.1
    sound.currentTime = 0;
    
    if (playingsound == false) {
        sound.play()
        playingsound = true;
    } else {
        sound.pause();
        playingsound = false;
    }   
}
