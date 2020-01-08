/*5.	Напишите функцию аналог метода массива push.
Функция добавляет в конец переданного в параметре
массив произвольное количество элементов.*/

function pushApp(a){
n = (Math.random().toFixed(2)*100).toFixed(0);
console.log(' функция добавит ' + n + ' элементов к массиву')
let arr=a;
let l=arr.length
for (let i=l; i < l + +n; i++) {
arr[i]=+(Math.random().toFixed(1)*10).toFixed(0);
}
return (arr)
}
console.log(pushApp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));