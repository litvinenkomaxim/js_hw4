"use strict"

let str = prompt("Write", "Мне нравится изучать Front-end");
let myLove = prompt("напиши что любишь", "мемы");
if (str.indexOf(myLove) == -1) {
    alert("то что нравится не совпадает")
} else {
    alert("то что нравится совпадает")
};
let iLove = str.slice(0, 20);
let result = `${iLove} ${myLove}`;
alert(result);