// Digital Clock
function updateDigitalClock() {
    const digitalTime = document.getElementById("digital-time");
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    
    digitalTime.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateDigitalClock, 1000);

// Analog Clock
function updateAnalogClock() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    // Calculate angles for hour, minute, and second hands
    const hourAngle = (hour % 12) * 30 + minute * 0.5; // Each hour is 30 degrees, plus 0.5 degree per minute
    const minuteAngle = minute * 6; // Each minute is 6 degrees
    const secondAngle = second * 6; // Each second is 6 degrees

    // Apply the rotations
    document.getElementById("hour").style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
    document.getElementById("minute").style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
    document.getElementById("second").style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;
}

setInterval(updateAnalogClock, 1000);
