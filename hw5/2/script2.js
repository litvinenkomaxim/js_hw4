/*2. Придумайте алгоритм расчета суммы всех фактических 
параметров функции с использованием только рекурсии:
*/

let sum = function (...a) {
  if (a.length == 0) {
    return 0
  } else {

    return a.pop() + sum(...a);
  }
}
console.log(sum(1, 2, 3, 4, 44, 6, 7, 52));

b = [1, 2, 3, 4, 44, 6, 7, 52]

console.log(b);
console.log(b.pop());
console.log(b);
// console.log(b.pop() + sum(...a));