var second = document.querySelector(".sec-hand");
var minute = document.querySelector(".min-hand");
var hour = document.querySelector(".hour-hand");

function time() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegree = ((seconds / 60) * 360) + 90;
    second.style.transform = `rotate(${secondDegree}deg)`;

    const min = now.getMinutes();
    const minDegree = ((min / 60) * 360) + ((seconds / 60) * 6) + 90;
    minute.style.transform = `rotate(${minDegree}deg)`;

    const hours = now.getHours();
    const hourDegree = ((hours / 12) * 360) + ((min / 60) * 30) + 90;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(time, 1000);
time();