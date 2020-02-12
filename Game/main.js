//функция получения рандомного цвета
function getRandColor() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16); // 
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}


//функция прямоугольник
function Rect() {
  this.x = (Math.random() * 620); // возвращает Х в диапазоне от 0 до1 умноженное на 620

  this.y = 0;
  this.h = 20; //размер квадратика
  this.w = 20;
  this.color = getRandColor(); //цвет квадрата
  this.draw = function (ctx) { //рисует квадратик
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.h, this.w);
  };
  this.dy = Math.floor(Math.random() * 2) + 1; //скорость. Скорость генерируется случайным образом от 1 до 2х пикселей
};

let arr = [];

let score = document.getElementById("score");
let count = 0;

let funcStart = () => {
  this.addSquare = setInterval(() => {
    arr.push(new Rect());
  }, 1000);
  count = 0;
  score.innerHTML = (`${count}`);
}

const start = document.querySelector(".start");
start.addEventListener("click", funcStart);

function funcStop() {
  clearInterval(addSquare);
  arr.splice(0, arr.length);
};

const stop = document.querySelector(".stop");
stop.addEventListener("click", funcStop);


function animate() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let key of arr) {
    key.draw(ctx);
    key.y += key.dy;
    // key.y += 0.1;
  }

  requestAnimationFrame(animate);
}

catchSquare = (event) => {
  for (key of arr) {
    if (event.clientX >= (key.x + 8) && event.clientX <= (key.x + 28) && event.clientY >= (key.y + 29) && event.clientY <= (key.y + 49)) {
      arr.splice(arr.indexOf(key), 1);
      count += 1;
      score.innerHTML = `${count}`;
    }
  }
}

canvas.addEventListener("click", catchSquare, true);

document.body.onload = animate;