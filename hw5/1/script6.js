/*6. Создайте объект user с полем name.
Создайте функцию format с параметрами start и end:*/

let user = {
  name: "John",
}

function format(start, end) {
  console.log(start + this.name + end);
}
let userFormat = format.bind(user)
userFormat('<<<', '>>>'); // <<<John>>>