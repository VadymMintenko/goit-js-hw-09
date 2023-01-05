import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const button = document.querySelector('button[data-start]');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');
const timeContainer = document.querySelector('.timer');
const inputEl = document.querySelector('#datetime-picker');

let intervalId = null;
const currentTime = new Date();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= currentTime) {
      alert('Please choose a date in the future');
      button.disabled = true;
      return;
    } else button.disabled = false;
  },
};
const fp = flatpickr('input[type=text]', options);

button.addEventListener('click', () => {
  timer.start();
});

class Timer {
  constructor({ onTick }) {
    this.onTick = onTick;
  }
  start() {
    button.disabled = true;
    intervalId = setInterval(() => {
      const startTime = fp.selectedDates[0];
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      if (deltaTime <= 0) {
        clearInterval(intervalId);
        button.disabled = false;
        return;
      }
      const time = convertMs(deltaTime);
      this.onTick(time);
    }, 1000);
  }
}

const timer = new Timer({
  onTick: updateClockfacew,
});

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateClockfacew({ days, hours, minutes, seconds }) {
  daysValue.textContent = days;
  hoursValue.textContent = hours;
  minutesValue.textContent = minutes;
  secondsValue.textContent = seconds;
}

inputEl.style.height = '30px';
timeContainer.style.display = 'flex';
timeContainer.style.gap = '20px';
timeContainer.style.fontSize = '32px';
button.style.width = '100px';
button.style.height = '30px';
