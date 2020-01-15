let long = prompt("enter number", '12');
let ammountOdd = 0;
for (let i = 0; i < long; i++) {
  if ((i % 2 !== 0) == true) {
    ammountOdd = ammountOdd + i;
  }
}
alert(ammountOdd)