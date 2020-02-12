"use strict";

var $bookList = $('#book-list'),
  $currentBook = $('#current-book'),
  $searchForm = $('#search-form');

$currentBook.hide(); //display none

var allBooks = []; //создаем пустой массив



$searchForm.on('submit', function (event) { // подписывается на событие submit от searchform и запускаем функцию на true
  //console.log('event', event)
  event.preventDefault(); // Для отмены действия браузера существует стандартный метод event.preventDefault().
  //console.log("this", this); //в this записывается html всей формы с вложениями
  var query = $(this).find('[name="srch-term"]').val().replace(/\s/g, '+'); // находим search-term получаем значение и удаляем пробелы. мой поисковый запрос в котором пробелы заменяются на плюсы
  //console.log('query', query);
  getBook(query); // запускаем функцию с полученным параметром. функцию пишем ниже
});
//суть этого всего было получить поисковый запрос и передать его в следующую функцию



function getBook(query) {
  var server = 'https://www.googleapis.com/books/v1/volumes';

  $.ajax({
    url: server,
    method: 'GET',
    data: 'q=' + query //отпарвляем на сервер запрос 
  }).done(function (response) {
    allBooks = response.items; // записываем в массив все книги ответ запроса
    $bookList.empty(); //Очищает содержание выбранных элементов, т.е. удаляет все узлы-потомки (включая тексты) из выбранных элементов, все обработчики событий и внутренние кэш-данные
    console.log("allBooks", allBooks)
    allBooks.forEach(function (book) {
      $('<a href="">').addClass('list-group-item')
        .text(book.volumeInfo.title)
        .attr('data-id', book.id)
        .appendTo($bookList);
    });
  }).fail(function (error) {});
  //console.log("data", data)
}

/*
$bookList.on('click', '[data-id]', function (event) { //подписка на блок буклист. событие клик и из клика c с конкретным data id получаю event
  event.preventDefault();
  console.log('this', this)

  var bookId = $(this).data('id');
  console.log('bookid', bookId)
  var book = allBooks.filter(function (item) {
    return item.id === bookId;
  })[0];

  console.log('book', book);

  $currentBook.fadeIn(); //включить отображение

  $currentBook
    .find('.book-title')
    .text(book.volumeInfo.title + ' | ' + book.volumeInfo.authors.join(', ') + '(' + book.volumeInfo.publishedDate + ')');

  var $bookDescription = $currentBook.find('.book-description');

  $bookDescription.empty();

  $('<img>').attr('src', book.volumeInfo.imageLinks.thumbnail)
    .appendTo($bookDescription);

  $('<p>').text(book.volumeInfo.description)
    .appendTo($bookDescription);

  $('<a>').attr('href', book.volumeInfo.previewLink)
    .attr('target', '_blank')
    .text('Read more...')
    .addClass('float-right')
    .appendTo($bookDescription);
});
*/