// const URL = "https://trevadim.github.io/vue/data/data.json";
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://trevadim.github.io/vue/data/data.json", false); // Конфигурируем его: GET-запрос на URL "https://www.googleapis.com/books/v1/volumes"
xhr.send(); // Отсылаем запрос

/*if (xhr.status != 200) { // обработать ошибку
  console.log(xhr.status + ': ' + xhr.statusText); // вывод ошибки
}
else { // вывести результат
  console.log(xhr.responseText); // responseText -- текст ответа.
}*/

let data = JSON.parse(xhr.responseText);
let mainHeader = data.main;
const body = document.querySelector("body");
const header = document.createElement('header');
body.appendChild(header);

for (key in mainHeader) {
  const h2 = document.createElement('h2');
  h2.innerHTML = `${mainHeader[key]}`;
  header.appendChild(h2);
}

let planets = data.planets
console.log('palnets', planets)
const main = document.createElement('main');
body.appendChild(main);

for (key in planets) {
  const div = document.createElement('div');
  div.innerHTML = `<h3>${planets[key].title}</h3>
    <p>${planets[key].info}</p>
    <figure><img src="${planets[key].url}"></img></figure> `;
  main.appendChild(div)
}