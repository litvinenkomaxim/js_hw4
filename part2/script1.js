/*1. Используя замыкание, напишите функцию createTimer, 
которая использует метод performance.now() для получения 
текущей временной метки и служит для замера времени 
выполнения другого кода: */


function createTimer() {
  let t0;
  t0 = performance.now()

  function sum(a, b) {
    a = a + 10;
    b = b * 10;
    let c = a + b;
  }
  t1 = performance.now();
  console.log('На выполнение функции');
  console.log(sum);
  console.log('потрачено ' + (t1 - t0) + ' мкс');
  console.log(t1 - t0);
  return (t1 - t0);
  sum(2, 5);
  reurn(sum)
}
//createTimer();
let timer = createTimer();
//console.log(timer() + '    22222');
//timer();
//console.log(timer() + '    22222');

console.log(sum); // код, время выполнения которого нужно измерить
console.log(timer); // время в мкс от начала выполнения createTimer() до момента вызова timer()