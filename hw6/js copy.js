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

const line = new Line(50, 250, 200, 200, 'red')

const drawArea = new Canvas('c1')

drawArea.add(line)