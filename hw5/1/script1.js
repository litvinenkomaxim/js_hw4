/*1. Создайте объект calculator с методами:
  a.read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
b.sum() возвращает сумму этих двух значений
c.multi() возвращает произведение этих двух значений
d.diff() возвращает разницу
e.div() возвращает частное */

let calculator = {
  read() {
    this.x = +prompt('input x');
    this.y = +prompt('input y');
  },
  sum() {
    let numberSum = this.x + this.y;
    return alert(`sum of numbers = ${numberSum}`);
  },
  multi() {
    let numberMulti = this.x * this.y;
    return alert(`multi of numbers = ${numberMulti}`);
  },
  diff() {
    let numberDiff = this.x - this.y;
    return alert(`diff of numbers = ${numberDiff}`);
  },
  div() {
    let numberDiv = this.x / this.y;
    return alert(`div of numbers = ${numberDiv}`);
  },
};
calculator.read();
calculator.sum();
calculator.multi();
calculator.diff();
calculator.div();