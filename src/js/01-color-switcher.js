

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStartEl = document.querySelector("button[data-start]");
const btnStopEl = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");

btnStartEl.addEventListener('click', onBtnStartCklick);
btnStopEl.addEventListener('click', onBtnStopCklick);

function generatorColor() { 
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

function onBtnStartCklick() {
  console.log('Start');

  generatorColor();

  btnStopEl.removeAttribute("disabled");
  btnStartEl.setAttribute("disabled", "disabled");
};

function onBtnStopCklick() {
  console.log('Stop');

  clearInterval(timerId);
  btnStartEl.removeAttribute('disabled');
  btnStopEl.setAttribute("disabled", "disabled");
};