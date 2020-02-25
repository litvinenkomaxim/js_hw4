"use strict";

var $bookList = $('#book-list'),
  $currentBook = $('#current-book'),
  $searchForm = $('#search-form'),
  $clipList = $('#clip-list'),
  $carouselExampleControls = $('#carouselExampleControls'),
  $carouselbtnbtn = $('#carouselbtnbtn1');


$currentBook.hide(); //display none
var allClips; //создаем пустую переменную куда запишется объект
var allClipsMass = [];

$searchForm.on('submit', function (event) { // подписывается на событие submit от searchform и запускаем функцию на true
  //console.log('event', event)
  event.preventDefault(); // Для отмены действия браузера существует стандартный метод event.preventDefault().
  //console.log("this", this); //в this записывается html всей формы с вложениями
  var query = $(this).find('[name="srch-term"]').val().replace(/\s/g, '+'); // находим search-term получаем значение и удаляем пробелы. мой поисковый запрос в котором пробелы заменяются на плюсы
  //console.log('query', query);
  getBook(query); // запускаем функцию с полученным параметром. функцию пишем ниже
  $carouselExampleControls.fadeIn();
});
//суть этого всего было получить поисковый запрос и передать его в следующую функцию

$carouselExampleControls.hide(); //display none

function getBook(query) {
  var server = 'https://itunes.apple.com/search';
  $.ajax({
      url: server,
      method: 'GET',
      data: 'limit=10&entity=musicVideo&term=' + query
    })
    .done(function (response) {
      //console.log('response', response)
      allClips = JSON.parse(response);
      //console.log("a", allClips);
      allClipsMass = allClips.results;
      $bookList.empty();

      console.log('allll', allClipsMass);
      allClipsMass.forEach(function (item) {

        const video = $(`<video>`)
          .attr("src", item.previewUrl)
          .attr("controls", "controls");
        $($clipList).append($(`<div class="carousel-item">`).append(video));
      });
    }).fail(function (error) {});
}