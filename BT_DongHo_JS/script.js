const btnStart = document.querySelector('.btn_start');
const btnEnd = document.querySelector('.btn_end');
const btnReset = document.querySelector('.btn_reset');
const timerMin = document.querySelector('.minutes');
const timerSec = document.querySelector('.seconds');
let interval;
const timer = () => {
    let minutes = parseInt(timerMin.textContent, 10);
    let seconds = parseInt(timerSec.textContent, 10);
    seconds++;
    if (seconds === 59) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        clearInterval(interval);
    }
    if (seconds < 10) {
        timerSec.textContent = `0${seconds}`;
    } else {
        timerSec.textContent = seconds;
    }
    if (minutes < 10) {
        timerMin.textContent = `0${minutes}`;
    } else {
        timerMin.textContent = minutes;
    }
};
btnStart.addEventListener('click', () => {
    if (interval) {
        alert('Timer is already running');
    } else {
        interval = setInterval(timer, 1000);
        alert('Timer has started');
    }
});
btnEnd.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
        alert('Timer has stopped');
    } else {
        alert('Timer is already stopped');
    }
});
btnReset.addEventListener('click', () => {
    if (interval) {
        timerMin.textContent = '00';
        timerSec.textContent = '00';
        clearInterval(interval);
        alert('Timer has reset');
    } else {
        alert('Timer is already stopped');
    }
});