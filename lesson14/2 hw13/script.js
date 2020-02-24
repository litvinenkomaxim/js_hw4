const body = document.querySelector("body");
const h2 = document.createElement('h2');
body.appendChild(h2);
//
const start = document.createElement("button");
body.appendChild(start);
start.innerHTML = "start button"
start.classList.add('startClass')

t = setInterval(() => {
  h2.innerHTML = `time is ${Date().slice(16, -46)}`
}, 1000)

function startButton() {
  t = setInterval(() => {
    h2.innerHTML = `time is ${Date().slice(16, -46)}`
  }, 1000)
};
const startstart = document.querySelector(".startClass");
startstart.addEventListener("click", startButton)
//
const stop = document.createElement("button");
body.appendChild(stop);
stop.innerHTML = "stop button"
stop.classList.add('stopClass')

function stopButton() {
  clearInterval(t);
  h2.innerHTML = `time is ${Date().slice(16, -46)}`
};
const stopstop = document.querySelector(".stopClass");
stopstop.addEventListener("click", stopButton)