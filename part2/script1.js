/*1. Используя замыкание, напишите функцию createTimer, 
которая использует метод performance.now() для получения 
текущей временной метки и служит для замера времени 
выполнения другого кода: */


function createTimer() {
  return function () {
    t0 = performance.now();
    alert(1 + 1);
    let t1 = performance.now();
    return (t1 - t0);
  }
}
let timer = createTimer();
alert(timer());