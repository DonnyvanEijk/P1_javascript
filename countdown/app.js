



function countdown() {
    const countDate = new Date("October 21, 2022, 17:00:00").getTime();
const now = new Date().getTime();

const gap = countDate - now;
const second = 1000
const minute =  second * 60
const hour =  minute * 60
const day = hour * 24
const textDay = Math.floor(gap / day);
const textHour = Math.floor((gap % day)/hour);
const textMinute = Math.floor((gap % day) / minute);
const textSecond = Math.floor((gap % day) / second);

document.querySelector(".day").innerText = textDay
document.querySelector(".minute").innerText = textMinute
document.querySelector(".hour").innerText = textHour;
document.querySelector(",second").innerText = textSecond;

console.log(countDate)
    
}

setInterval(countdown, 1000);

