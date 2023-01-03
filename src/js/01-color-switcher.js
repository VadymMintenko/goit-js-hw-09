const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let intervalId = null;

buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener('click', onStop);

function onStart() {
  buttonStart.disabled = true;
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  clearInterval(intervalId);
  buttonStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
