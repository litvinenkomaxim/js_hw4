// // let el = document.createElement('<div>text</div>');

// let textNode = document.createTextNode('hello');

// // el.innerHTML = '<p>Hello World!</p>';

// let el = document.querySelector('div');

// // добавление контента в элемент
// el.innerHTML += '<p>Hello World!</p>';

// const URL = "https://jsonplaceholder.typicode.com/posts";
const URL = "https://trevadim.github.io/vue/data/data.json";



const createMarkup = (data) => {
  const main2 = document.querySelector("main");
  console.log('main2', main2);

  const body = document.querySelector("body");
  console.log('body', body);
  const header = document.createElement("header");
  const text = document.createTextNode("Hello");

  body.appendChild(header);
  body.appendChild(main2);
  header.appendChild(text);

  const main = document.createElement("main");
  data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `<h2>${item.title}</h2><p>${item.body}</p>`;
    main.appendChild(div);
  });
  body.appendChild(main);
};

function a(title) {
  console.log("title", title);
}

fetch(URL)
  .then((response) => response.json())
  .then((data) => createMarkup(data));