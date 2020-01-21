class Canvas {
  constructor(id) {
    this.canvas = document.getElementById(id)
    this.ctx = this.canvas.getContext('2d')
  }
}
const drawArea = new Canvas('c1')
console.log(drawArea)
console.log(this.ctx)