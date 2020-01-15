let x = prompt("enter x", 1);
let y = prompt("enter y", 5);

if (x <= 1 && (y >= 3 || y < 0)) {
  alert(`x + y = ${+x + +y}`)
} else {
  alert('neverno')
}