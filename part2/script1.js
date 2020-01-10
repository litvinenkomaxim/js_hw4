/*1. Используя замыкание, напишите функцию createTimer, 
которая использует метод performance.now() для получения 
текущей временной метки и служит для замера времени 
выполнения другого кода: */


function createTimer() {

  t0 = performance.now()
  alert("!");
  t1 = performance.now();
  console.log('На выполнение функции');
  console.log('потрачено ' + (t1 - t0) + ' мкс');
  console.log(t1 - t0);
  return (t1 - t0);
}
createTimer();
// let timer = createTimer();
// timer()