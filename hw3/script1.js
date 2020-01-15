/*1. Создайте смешанный массив, например[1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
Посчитайте сумму всех его чисел, включая строковые.Выведите сумму в alert.
*/



let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let ammountNumbers = 0;
let check
for (let i = 0; i < arr.length; i++) {
    check = arr[i] * 2;
    if (isNaN(check) == false) {
        ammountNumbers = ammountNumbers + +arr[i];
    }
}
alert('ammount of numers = ' + ammountNumbers)