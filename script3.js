// 3. Изучите перебирающие методы массивов: forEach,
//     filter, map.Создайте массив объектов users(~10 объектов),
//     каждый объект имеет поля firstname, lastname, age
// с разными значениями.Используя встроенные функции
// массивов:
//     a.Отфильтруйте пользователей младше 18 лет
// b.Добавьте каждому объекту поле fullName, которое является
// конкатенацией имени и фамилии
// c.Сформируйте новый массив, который содержит только
// полное имя пользователей

// et 30 min
// at 20

let arr = [{
        firstname: "Maksym",
        lastname: "Lytvynenko",
        age: "32",
    },
    {
        firstname: "Andrey",
        lastname: "Kot",
        age: "30",
    },
    {
        firstname: "Ivan",
        lastname: "Petrov",
        age: "14",
    },
    {
        firstname: "Lena",
        lastname: "Perova",
        age: "16",
    },
    {
        firstname: "Dasha",
        lastname: "Pipkina",
        age: "17",
    },
    {
        firstname: "Diana",
        lastname: "Shurigina",
        age: "18",
    },
    {
        firstname: "Irina",
        lastname: "Zguravskaya",
        age: "49",
    },
    {
        firstname: "Diana",
        lastname: "Shurigina",
        age: "18",
    },
]
// a.Отфильтруйте пользователей младше 18 лет
arr = arr.filter(function (item, i, arr) {
    return item.age >= 18;
});
console.log(arr);

// b.Добавьте каждому объекту поле fullName, которое является
// конкатенацией имени и фамилии
arr.forEach(function (item, i, arr) {
    item.fullname = item.firstname + item.lastname
});
console.log(arr);

// c.Сформируйте новый массив, который содержит только
// полное имя пользователей
var fullnameArr = arr.map(function (item) {
    return item.fullname;
});
console.log(fullnameArr);