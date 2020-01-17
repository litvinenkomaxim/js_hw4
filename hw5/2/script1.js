/*1. Напишите функцию, которая возвращает 
куб переданного числа, аналог Math.pow(x, 3)– 
a) используя цикл 
b) используя рекурсию:*/


function cube(a) {
  let b = 1;
  for (i = 0; i < 3; i++) {
    b = b * a;
  }
  return (b)
}

console.log(cube(2));

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 3)); // 8