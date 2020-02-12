function getRandColor() {
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16); // 
  console.log('color', color)
  while (color.length < 6) {
    color = "0" + color;
  }
  return "#" + color;
}

vvv = getRandColor();


console.log