/*
Создайте h2 c текстом "События"
Создайте блок div размером 400 px на 400 px
Создайте над блоком текст с отображением координат по примеру X: 150 Y: 120
Добавьте внизу блока еще один текст с содержанием "Координаты внутри блока: х 180, у 200"
Повесьте на блок обработчик события на движение мышки над ним.
При движении мышки над блоком должны обновляться данные о расположении курсора и отображаться координаты в тексте над блоком соответственно осям х и у по отношению к странице
Внизу должны отображаться текущие координаты по x и y, но по отношению блока
*/

const body = document.querySelector("body");
const html = document.querySelector("html");
const h2 = document.createElement("h2");
h2.innerHTML = 'События';
body.appendChild(h2);

const pageCoordinates = document.createElement("h2");

const divDiv = document.createElement("div");
divDiv.style.background = "red"
divDiv.style.height = "400px"
divDiv.style.width = "400px"
divDiv.onmousemove = function () {
  // pageCoordinates.innerHTML = event.clientX + ':' + event.clientY;
  blockCoordinates.innerHTML = event.offsetX + ':' + event.offsetY;
}

html.onmousemove = function () {
  pageCoordinates.innerHTML = event.clientX + ':' + event.clientY;
}

const blockCoordinates = document.createElement("h2");

body.appendChild(pageCoordinates);
body.appendChild(divDiv);
body.appendChild(blockCoordinates);