// 9.	Используя вложенные циклы, сформируйте двумерный 
// массив, содержащий таблицу умножения:

let arr = []

for (let i = 1; i < 10; i++) {
  arrIn = [];
  for (let k = 1; k < 11; k++) {
    arrIn.push(i + '*' + k + "=" + i * k);
  }
  arr.push(arrIn);
}
console.log(arr)