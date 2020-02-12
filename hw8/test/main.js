// тут может находится ваш код

function animate() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // тут может находится ваш код

  requestAnimationFrame(animate);
}

// тут может находится ваш код

document.body.onload = animate;