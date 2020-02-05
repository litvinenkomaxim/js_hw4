const URL = "https://jsonplaceholder.typicode.com/posts";

const createMarkup = (data) => {
  const body = document.querySelector("body");

  const header = document.createElement("header");
  const text = document.createTextNode("Hello");
  header.appendChild(text);
  body.appendChild(header);

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