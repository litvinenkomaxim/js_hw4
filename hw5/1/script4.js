/*4. Создайте объект с данными: x, y и методами: 
getSum, getDiff, getMulti, getDiv.Методы объекта 
ничего не реализуют, а только выводят в alert 
сообщения вида‘ 1 + 1 = 2’ или‘ 1 / 0 = Infinity’.
Для расчетов все методы используют функционал ранее
 созданного калькулятора. */
me = {
  getSum(a, b) {
    this.x = a;
    this.y = b;
    return `x + y = ${this.x + this.y}`
  },
  getDiv(a, b) {
    this.x = a;
    this.y = b;
    return `x / y = ${this.x / this.y}`
  },
  getMulti(a, b) {
    this.x = a;
    this.y = b;
    return `x * y = ${this.x * this.y}`
  },
  getDiff(a, b) {
    this.x = a;
    this.y = b;
    return `x - y = ${this.x - this.y}`
  },
}
alert(me.getSum(1, 1));
alert(me.getDiv(1, 0));
alert(me.getMulti(1, 0));
alert(me.getDiff(1, 0));