/*6. Создайте объект user с полем name.
Создайте функцию format с параметрами start и end:*/

let user = {
  name: 'ivan',
  /*format(start, end) {
    console.log(start + this.name + end);
  }*/
}

function format(start, end) {
  console.log(start + this.name + end);
}


user.format.bind(user, '<<<', '>>>'); // <<<John>>>