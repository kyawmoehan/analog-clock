const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const h2 = document.querySelector('h2');
 

function setDate() {
    const now = new Date();
    displayDate(now);
    
    // seconds hand
    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    // minute hand
    const minute = now.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

     // hour hand
     const hour = now.getHours();
     const hourDegree = ((hour / 12) * 360) + 90;
     hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);

function displayDate(now) {
    const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const weekday = WEEKDAYS[now.getDay()];
    const month = MONTHS[now.getMonth()];
    const day = now.getDate();

    h2.innerText = `${weekday} ${month} ${day}`;
}