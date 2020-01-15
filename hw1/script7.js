"use strict"

let randVariable = Math.round(Math.random() * 100);

let myNumber = prompt('input number', 5);

if (randVariable > myNumber == true) {
    alert("first number " + randVariable + " is bigger than second number " + myNumber)
} else {
    alert("first number " + randVariable + " is less than second number " + myNumber)
};