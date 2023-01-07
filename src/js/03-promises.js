const formEl = document.querySelector('.form');
formEl.addEventListener('input', onInput);

const button = document.querySelector('button');
button.addEventListener('click', onClick);
const refs = {
  amount: '',
  delay: '',
  step: '',
};

function onInput(evt) {
  refs[evt.target.name] = evt.target.value;
}

function onClick() {
  for (let i = 0; i < refs.amount; i += 1) {
    console.log(i);
    createPromise(2, 3000)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res(position, delay);
      } else {
        rej(position, delay);
      }
    }, delay);
  });
}
// createPromise(3, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
