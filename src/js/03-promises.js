const formEl = document.querySelector('.form');
const inputDelayEl = document.querySelector('.delay');
const inputStepEl = document.querySelector('.step');
const inputAmountEl = document.querySelector('.amount');

let formData = {
  delay: 0,
  step: 0,
  amount: 0,
};

let delay = formData.delay;
let position = 0;
let timerId = null;

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) { 
  e.preventDefault();

  formData = {
  delay: +inputDelayEl.value,
  step: +inputStepEl.value,
  amount: +inputAmountEl.value,
};

  setTimeout(() => {
    timer();
    }, formData.delay);
};

function timer() {
  
  timerId = setInterval(() => {
    position += 1;

    if (position > 1) {
      delay += formData.step;
    } else {
      delay = formData.delay;
    };
      createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  
    if (formData.amount === position) { 
      clearInterval(timerId);
      
      formData = {
        delay: 0,
        step: 0,
        amount: 0,
      };

      position = 0;
    };
      
  }, formData.step);
    
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => { 
    const shouldResolve = Math.random() > 0.3;
    const data = { position, delay};

    if (shouldResolve) {
        // Fulfill
        resolve(data);
      } else {
        // Reject
        reject(data);
      };
  });

  return promise;
}



