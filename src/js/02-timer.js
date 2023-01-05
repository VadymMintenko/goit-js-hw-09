import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0] - new Date());
  },
};

flatpickr('input[type=text]', options);

const button = document.querySelector('button[data-start]');
// const inputEl = document.querySelector('#datetime-picker');
const daysValue = document.querySelector('span[data-days]');
const hoursValue = document.querySelector('span[data-hours]');
const minutesValue = document.querySelector('span[data-minutes]');
const secondsValue = document.querySelector('span[data-seconds]');

button.addEventListener('click', () => {
  timer.start();
});

class Timer {
  constructor({ onTick }) {
    this.onTick = onTick;
  }
  start() {
    if (button.disabled) {
      return;
    }
    button.disabled = true;
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;

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
  daysValue.textContent = `${days}`;
  hoursValue.textContent = `${hours}`;
  minutesValue.textContent = `${minutes}`;
  secondsValue.textContent = `${seconds}`;
}
