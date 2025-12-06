let display = document.getElementById("display");

function insert(num) {
    display.value += num;
}

function equal() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}


let clockDisplay = document.getElementById("clockDisplay");
let alarmTimeInput = document.getElementById("alarmTime");
let alarmSound = new Audio("alarm.mp3"); 
let alarmTime = null;
let alarmInterval = null;

function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    
    
    if (alarmTime && alarmTime === `${hours}:${minutes}`) {
        triggerAlarm();
    }
}

function setAlarm() {
    alarmTime = alarmTimeInput.value;
    if (alarmTime) {
        alert(`Alarm set for ${alarmTime}`);
    }
}

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alarmTime = null;
    clockDisplay.classList.remove("shake");
    alert("Alarm stopped!");
}

function triggerAlarm() {
    alarmSound.play();
    clockDisplay.classList.add("shake");
}


setInterval(updateClock, 1000);
