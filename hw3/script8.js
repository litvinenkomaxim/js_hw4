// 8.	Создайте пустой массив. В цикле до n на каждой 
// итерации запускайте prompt для ввода любых символов, 
// полученное значение добавляйте в конец созданного 
// массива. После выхода из цикла посчитайте сумму всех 
// чисел массива и выведите в alert полученный результат.

let arr = [];
n = 4;
for (let i = 0; i < n; i++) {
  arr.push(prompt());
}

let ammountNumbers = 0;
let check
for (let i = 0; i < arr.length; i++) {
  check = arr[i] * 2;
  if (isNaN(check) == false) {
    ammountNumbers = ammountNumbers + +arr[i];
  };
}
alert('ammount of numers = ' + ammountNumbers)