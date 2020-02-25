/*
Создайте заголовок h2 c текстом "jQuery methods"
Создайте абзац со случайным текстом(придумайте сами).Дайте такие стили: цвет текста красный, размещение текста центр.
Создайте массив пользователей(минимум 5).У каждого пользователя должно быть: firstName, lastName, age, job.
Сделайте список ul, где li будет содержать информацию о пользователе в формате "Имя Фамилия возраст должность"
Каждому 2 му li в списке задайте классы, которые сделают фон цветом# eeeeee
*/

"use strict";

var $buttonGreen = $(".green"),
  $body = $('body');


$("<h2>")
  .text("jQuery methods")
  .appendTo($body)

$("<p>")
  .text("случайным текстом(придумайте сами)")
  .attr("style", "color:red; text-align: center")
  .appendTo($body)

let array = [{
    firstName: "Ivan1",
    lastName: "Petrov1",
    age: 201,
    job: "builder1"
  },
  {
    firstName: "Ivan2",
    lastName: "Petrov2",
    age: 202,
    job: "builder2"
  },
  {
    firstName: "Ivan3",
    lastName: "Petrov3",
    age: 203,
    job: "builder3"
  },
  {
    firstName: "Ivan4",
    lastName: "Petrov4",
    age: 204,
    job: "builder4"
  },
  {
    firstName: "Ivan5",
    lastName: "Petrov5",
    age: 205,
    job: "builder5"
  }
]

array.forEach(element => {
  $("<ul>")
    .addClass(`class${+array.indexOf(element) + 1}`)
    .text(`${+array.indexOf(element) + 1}`)
    .appendTo($body)

  $("<li>")
    .text(`${element.firstName}`)
    .appendTo(`.class${+array.indexOf(element) + 1}`);
  $("<li>")
    .text(`${element.lastName}`)
    .appendTo(`.class${+array.indexOf(element) + 1}`)

  $("<li>")
    .text(`${element.age}`)
    .appendTo(`.class${+array.indexOf(element) + 1}`)

  $("<li>")
    .text(`${element.job}`)
    .appendTo(`.class${+array.indexOf(element) + 1}`)


  console.log(element.firstName)
  console.log(+array.indexOf(element) + 1)
});

/*
$("<button>")
  .addClass("green button")
  .text("green ")
  .appendTo($body);
$("<button>")
  .addClass("red button")
  .text("red")
  .appendTo($body);
$("<button>")
  .addClass("blue button")
  .text("blue")
  .appendTo($body);


$('.green').on('click', function () {
  $('.button').attr("style", "background: green")
});

$('.red').on('click', function () {
  $('.button').attr("style", "background: red")
});

$('.blue').on('click', function () {
  $('.button').attr("style", "background: blue")
});
*/