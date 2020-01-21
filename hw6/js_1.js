var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

class Figure {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

class Line extends Figure {
  constructor(x, y, x2, y2, color) {
    super(x, y, color);
    this.x2 = x2;
    this.y2 = y2;
  }
  draw() {
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
  }
}

var line = new Line(50, 250, 200, 200, 'red');
console.log(line);


var drawArea = new Canvas('c1');
drawArea.add(line);

/*
ctx.lineWidth = 1; // толщина линии
ctx.moveTo(50, 50); //передвигаем перо
ctx.lineTo(200, 100); //рисуем линию
ctx.stroke();
*/