import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('input[type="text"]');
const btnEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

let finishTime = 0;
let ms = 0;
let activeBtn = false;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        checkDates(selectedDates);
  },
};

flatpickr(inputEl, options);

function checkDates(date) {
    finishTime = date[0].getTime();
    ms = finishTime - Date.now();

    if (ms > 0) {
        activeBtn = true;
        btnEl.removeAttribute('disabled');  
    }
    else {
        window.alert("Please choose a date in the future");
        
        if (activeBtn) {
            btnEl.setAttribute("disabled", "disabled");
            activeBtn = false;
        }
    };
};

btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
    start();
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function start() {

    timerId = setInterval(() => {
        ms = finishTime - Date.now();
        
        setTimer();
    }, 1000);

    if (ms = 0) {
        clearInterval(timerId);
    };
}

function setTimer() {
    daysEl.textContent = convertMs(ms).days;
    hoursEl.textContent = convertMs(ms).hours;
    minutesEl.textContent = convertMs(ms).minutes;
    secondsEl.textContent = convertMs(ms).seconds;
}
