// 6.	Сгенерируйте объект, описывающий модель телефона,
// заполнив все свойства значениями, прочитанными из 
// prompt (например: brand, model, resolution, color...), 
// не используя вспомогательные переменные. Добавьте этот 
// гаджет персоне, созданной ранее.

let person = {
  name: "John",
  age: 32,
  job: "worker",
};
person.smartphone = {}
person.smartphone.brand = prompt("Введите бренд");
person.smartphone.model = prompt("Введите модель");
person.smartphone.resolution = prompt("Введите разрешение");
person.smartphone.color = prompt("Введите цвет");
console.log(person);