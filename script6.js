/* 6.	Напишите функцию аналог метода Object.assign(). 
Первый параметр функции - целевой объект, 
поля которого будут изменены или расширены. 
Остальные параметры - объекты-источники, 
полями которых будет расширяться целевой объект*/

function expansion(acceptor, donor1, donor2) {
  for (let key in donor2) {
    acceptor[key] = donor2[key];
  }
  for (let key in donor1) {
    acceptor[key] = donor1[key];
  }
  return (acceptor)
}

console.log(expansion({
  firstname: 'John',
  age: '10'
}, {
  firstname: 'Tom'
}, {
  lastname: 'Doe'
}))