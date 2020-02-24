function Figure(x1, y1, color) {
  this._x1 = x1;
  this._y1 = y1;
  this._color = color;
}

function Line(x1, y1, x2, y2, color) {
  Figure.apply(this, [x1, y1, color]);
  this._x2 = x2;
  this._y2 = y2;
}
Line.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.moveTo(this._x1, this._y1);
  ctx.lineTo(this._x2, this._y2);
  ctx.strokeStyle = this._color;
  ctx.stroke();
}

function Line2(x1, y1, x2, y2, color) {
  Figure.apply(this, [x1, y1, color]);
  this._x2 = x2;
  this._y2 = y2;
}
Line2.prototype.draw = function (ctx) {
  ctx.beginPath()
  ctx.strokeStyle = this._color
  ctx.moveTo(0, 0)
  this._deltax = this._x2
  this._deltay = this._y2
  for (let n = 0; n < 100; n++) {
    if (n % 2 == 0) {
      ctx.lineTo(this._x2, this._y2)
      this._x2 = this._x2 + this._deltax;
      this._y2 = this._y2 + this._deltay;
    } else {
      if (n == 1) {
        this._y2 = this._y2 - 2 * this._deltay;
        ctx.lineTo(this._x2, this._y2)
      } else {
        ctx.lineTo(this._x2, this._y2)
        this._x2 = this._x2 + this._deltax;
        this._y2 = this._y2 - this._deltay;
      }
    }
  }
  ctx.stroke()
  ctx.closePath()
}

function Rect(x1, y1, w, h, color) {
  Figure.apply(this, [x1, y1, color])
  this._w = w
  this._h = h
}
Rect.prototype.draw = function (ctx) {
  ctx.beginPath()
  ctx.fillStyle = this._color;
  ctx.fillRect(this._x1, this._y1, this._w, this._h);
  ctx.closePath()
}

function Circle(x1, y1, rad, color) {
  Figure.apply(this, [x1, y1, color]);
  this._rad = rad;
}
Circle.prototype.draw = function (ctx) {
  ctx.beginPath()
  ctx.arc(this._x1, this._y1, this._rad, 0, 360, false);
  ctx.lineWidth = 1;
  ctx.fillStyle = this._color;
  ctx.strokeStyle = this._color;
  ctx.fill()
  ctx.stroke();
  ctx.closePath()
}

function Canvas(sel) {
  var c = document.querySelector(sel)
  this._ctx = c.getContext("2d");
  c.height = 600;
  c.width = 600;
};
Canvas.prototype.add = function () {
  var ctx = this._ctx;
  [].forEach.call(arguments, function (el) {
    el.draw(ctx);
  });
}
var drawArea = new Canvas('#c1');
var line = new Line(50, 250, 200, 200, 'red');
var line2 = new Line(60, 260, 210, 210, 'green');
var rect = new Rect(260, 130, 60, 120, 'blue');
const rect2 = new Rect(290, 100, 130, 40, 'black')
const rect3 = new Rect(400, 130, 50, 100, 'yellow')
const circle = new Circle(120, 120, 50, 'green')
const circle2 = new Circle(150, 150, 30, 'red')
const line7 = new Line2(10, 10, 10, 10, 'red')


console.log(line);
console.log(line2);
console.log(rect);
console.log(circle);
console.log(circle2);
console.log(line7);
drawArea.add(line, line2, rect, rect2, rect3, circle, circle2, line7);