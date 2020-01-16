/*3. Создайте объект counter с методами увеличения, 
уменьшения значения счетчика и методом возврата 
текущего значения.Используйте концепцию chaining 
для создания цепочки вызовов. */

let counter = {
  count: 0,
  inc() {
    this.count++;
    return this;
  },
  dec() {
    this.count--;
    return this;
  },
  getvalue() {
    return this.count
  }
}
var current = counter.inc().inc().dec().inc().dec().getvalue();
alert(current); // 1