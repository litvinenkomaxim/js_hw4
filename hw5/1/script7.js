/*7. Напишите функцию concat, которая соединяет две строки, 
разделенные каким - то символом: разделитель и строки 
передаются в параметрах функции.Используя карринг, 
создайте новую функцию hello, которая которая выводит 
приветствие тому, кто передан в ее параметре:*/


let concat = function (oneString, xl, twoString) {
  alert(oneString + xl + twoString);
}

let hello = concat.bind(name, "Hello", " ", )


hello('World'); // Hello World
hello('John'); // Hello John