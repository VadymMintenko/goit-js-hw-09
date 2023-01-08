import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);

// const button = document.querySelector('button');
// button.addEventListener('click', onClick);

function onSubmit(evt) {
  evt.preventDefault();
  const {
    delay: { value: delay },
    step: { value: step },
    amount: { value: amount },
  } = evt.currentTarget;

  createCycle(Number(amount), Number(delay), Number(step));
}

function createCycle(amount, delay, step) {
  for (let i = 0; i < amount; i += 1) {
    const promiseNumber = i + 1;
    const delayStep = delay + step * i;
    createPromise(promiseNumber, delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
