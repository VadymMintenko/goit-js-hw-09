import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const button = document.querySelector('button[data-start]');
const inputEl = document.querySelector('#datetime-picker');

const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

button.disabled = false;

button.addEventListener('click', () => {
  timer.start();
});

const timer = {
  start() {
    if (button.disabled) {
      return;
    }
    button.disabled = true;
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();

      const time = convertMs(currentTime - startTime);
      updateClockfacew(time);
    }, 1000);
  },
};

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
  daysValue.textContent = `${days}`;
  hoursValue.textContent = `${hours}`;
  minutesValue.textContent = `${minutes}`;
  secondsValue.textContent = `${seconds}`;
}
