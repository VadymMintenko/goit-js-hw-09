const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let intervalId = null;

buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener('click', onStop);

function onStart() {
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStop() {
  clearInterval(intervalId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
