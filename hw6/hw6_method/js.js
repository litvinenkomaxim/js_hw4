class Canvas {
  constructor(id) {
    this.canvas = document.getElementById(id)
    this.ctx = this.canvas.getContext('2d')
  }

  add() {
    const args = Array.from(arguments)
    args.forEach(item => {
      item.draw(this.ctx)
    })
  }
}

class Figure {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.color = color
  }
}

class Line extends Figure {
  constructor(x, y, x2, y2, color) {
    super(x, y, color)
    this.x2 = x2
    this.y2 = y2
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.strokeStyle = this.color
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.x2, this.y2)
    ctx.stroke()
    ctx.closePath()
  }
}

class Line2 extends Figure {
  constructor(x, y, x2, y2, color) {
    super(x, y, color)
    this.x2 = x2
    this.y2 = y2
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.strokeStyle = this.color
    ctx.moveTo(0, 0)
    this.deltax = this.x2
    this.deltay = this.y2
    for (let n = 0; n < 100; n++) {
      if (n % 2 == 0) {
        ctx.lineTo(this.x2, this.y2)
        this.x2 = this.x2 + this.deltax;
        this.y2 = this.y2 + this.deltay;
      } else {
        if (n == 1) {
          this.y2 = this.y2 - 2 * this.deltay;
          ctx.lineTo(this.x2, this.y2)
        } else {
          ctx.lineTo(this.x2, this.y2)
          this.x2 = this.x2 + this.deltax;
          this.y2 = this.y2 - this.deltay;

        }
      }
    }
    ctx.stroke()
    ctx.closePath()
  }
}


class Rect extends Figure {
  constructor(x, y, w, h, color) {
    super(x, y, color)
    this.w = w
    this.h = h
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.closePath()

  }
}
class Circle extends Figure {
  constructor(x, y, rad, color) {
    super(x, y, color)
    this.rad = rad
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.rad, 0, 360, false);
    ctx.lineWidth = 1;
    ctx.fillStyle = this.color;

    ctx.strokeStyle = this.color;
    ctx.fill()
    ctx.stroke();
    ctx.closePath()
  }
}


const line = new Line(50, 250, 200, 200, 'red')
const line2 = new Line(60, 260, 210, 210, 'green')
const rect = new Rect(260, 130, 60, 120, 'blue')
const rect2 = new Rect(290, 100, 130, 40, 'black')
const rect3 = new Rect(400, 130, 50, 100, 'yellow')
const circle = new Circle(120, 120, 50, 'green')
const circle2 = new Circle(150, 150, 30, 'red')

const line7 = new Line2(10, 10, 10, 10, 'red')
const drawArea = new Canvas('c1')
drawArea.add(line, line2, rect, rect2, rect3, circle, line7, circle2)