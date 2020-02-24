'use strict'
debugger;

function Figure(x1, y1, x2, y2, color) {
  this._x1 = x1;
  this._y1 = y1;
  this._x2 = x2;
  this._y2 = y2;
  this._color = color;
}

function Line(x1, y1, x2, y2, color) {
  Figure.apply(this, arguments);

  function draw(x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
  }
}

var line = new Line(50, 250, 200, 200, 'red');

function Canvas() {

  var c = document.getElementById("canvasID");
  var ctx = c.getContext("2d");
  c.height = 2000;
  c.width = 2000;

  Canvas.prototype.add = function () {
    return $(arguments).appendTo('#canvasID')
  }


};
var drawArea = new Canvas('canvasID');
drawArea.add(line);