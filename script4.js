/*4.	Напишите функцию аналог метода массива shift.
Функция удаляет из переданного в параметре массива
первый элемент.*/


function shiftApp(a) {
  let arr = a;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return (arr)
}
console.log(shiftApp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));