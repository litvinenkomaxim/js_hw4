//функция получения рандомного цвета
function getRandColor() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16); // 
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}

//функция прямоугольник
function Rect() { //функция создает объект в котором функция дроу рисует сам квадрат
  this.x = (Math.random() * 620); // возвращает Х в диапазоне от 0 до1 умноженное на 620
  this.y = 0;
  this.h = 40; //размер квадратика
  this.w = 40;
  this.color = getRandColor(); //цвет квадрата
  this.draw = function (ctx) { //рисует квадратик
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.h, this.w);
  };
  this.dy = Math.floor(Math.random() * 2) + 1.3; //скорость. Скорость генерируется случайным образом от 1 до 2х пикселей
};

let arr = []; //создаем массив
let score = document.getElementById("score"); // создаем переменную скор по классу скор
let count = 0; //переменная счет

let funcStart = () => {
  start.removeEventListener("click", funcStart);
  this.addSquare = setInterval(() => { // запускаем циклический запуск вложенной функции с интервалом 1000мс/1с
    arr.push(new Rect()); // добавляет в массив объект равный исполненной функции new Rect()
    //    console.log('arr', arr);

    for (key of arr) {
      if (key.y > 400) {
        arr.splice(arr.indexOf(key), 1); // удаляет из массива  элемент под номером key
        // console.log('arr', arr)
      }
    }
  }, 1000);
  count = 0;
  score.innerHTML = (`${count}`);
}

const start = document.querySelector(".start"); //присваиваем переменную старт на элемент с классом старт . это кнопка
start.addEventListener("click", funcStart); //подписываемся на события старт

function funcStop() { //функция на нажатие кнопки стоп
  clearInterval(addSquare);
  arr.splice(0, arr.length);
  start.addEventListener("click", funcStart);
};

const stop = document.querySelector(".stop");
stop.addEventListener("click", funcStop);

function animate() { // запускаме создание квадратиков
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let key of arr) { // цикл движения квадрата 
    key.draw(ctx);
    key.y += key.dy;
  }
  requestAnimationFrame(animate);
}

catchSquare = (event) => { // функция удаления квадратиков 
  for (key of arr) {
    if (event.clientX >= (key.x + 8) && event.clientX <= (key.x + 48) && event.clientY >= (key.y + 29) && event.clientY <= (key.y + 69)) {
      arr.splice(arr.indexOf(key), 1); // удаляет из массива  элемент под номером key
      count += 1;
      score.innerHTML = `${count}`;
      //console.log('arr', arr)
    }
  }
}
canvas.addEventListener("click", catchSquare, true);
document.body.onload = animate;