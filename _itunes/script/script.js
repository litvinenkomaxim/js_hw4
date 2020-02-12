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
      allClipsMass.forEach(function (item, i, clip)

        {
          if (i == 0) {
            $(` <div class = "carousel-item elem active" >
              <video class="videovideo" controls="controls" poster = "${item.artworkUrl100}">
                <source src = "${item.previewUrl}" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                <a href = "${item.previewUrl}> Скачайте видео</a>. 
              </video>
            < /div>`).attr('data-id', item.trackName)
              .appendTo($clipList);
          } else {
            // console.log("i=0 false")
            $(` <div class = "carousel-item elem" >
              <video class="videovideo" controls="controls" poster = "${item.artworkUrl100}">
                <source src = "${item.previewUrl}" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                <a href = "${item.previewUrl}> Скачайте видео</a>. 
              </video>
            < /div>`).attr('data-id', clip.trackName)
              .appendTo($clipList);
          }
        }
      );
    }).fail(function (error) {});
}

/*$carouselbtnbtn.on('click', function (event) {
  console.log('event', event)
  event.preventDefault();
  console.log('this', this)

})*/

carouselbtnbtn1.onclick = function () {
  console.log('stop video')
};
carouselbtnbtn2.onclick = function () {
  console.log('stop video')
};

var target = $('.videovideo');
var targetPos = target.offset().top;
var targetHeight = target.height();
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;

$("window").scroll(function () {
  var winScrollTop = $(this).scrollTop();
  if (winScrollTop > scrollToElem && winScrollTop < scrollToElem + winHeight + targetHeight) {
    //Сработает, когда пользователь доскроллит до элемента с классом .elem
    $('.videovideo').play();
  } else {
    $('.videovideo').stop();
  }
});