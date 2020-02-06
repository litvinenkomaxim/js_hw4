const URL = "https://trevadim.github.io/vue/data/data.json";

const createMarkup = (data) => {
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
};

fetch(URL)
  .then((response) => response.json())
  .then((data) => createMarkup(data));