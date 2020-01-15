let x = prompt("enter x", 13);
let y = prompt("enter y", 5);

if ((x > 2 && x < 11) || (y >= 6 && y < 14)) {
  alert(`x*2= ${+x * 2}`)
} else {
  alert(`x+5= ${+x + 5}`)
}