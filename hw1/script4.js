"use strict"
let hours = prompt('working day hours', 8);
let days = prompt('working days', 20);
let rate = prompt('rate $/per hour', 10);
alert("you salary is $" + (hours * days * rate));