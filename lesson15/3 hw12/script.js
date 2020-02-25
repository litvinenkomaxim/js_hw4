/*
Создайте 3 кнопки с текстом "Green", "Red", "Blue".
Задайте цвет каждого в зависимости от их названия
Повесьте обработчики на клик для этих кнопок.
Функционал клика таков: при клике на кнопку, все кнопки должны изменить цвет фона на тот, который который указан на кнопке.К примеру нажали на кнопку Red, все кнопки стали красными.Нажали на Green, все кнопки стали зелеными.
*/

"use strict";

var $buttonGreen = $(".green"),
  $body = $('body');

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