const CANVAS = document.createElement("canvas");
const CTX = CANVAS.getContext("2d");

let level = 1;
function setup() {
  CANVAS.width = 600;
  CANVAS.height = 600;
  document.body.appendChild(CANVAS);
}

function draw() {
  CTX.beginPath();
  CTX.rect(-100, -200, CANVAS.width, CANVAS.height);
  CTX.fillStyle = "white";
  CTX.closePath();
  CTX.fill();

  CTX.beginPath();
  squareFractal(500, 2);
  CTX.closePath();
  CTX.fillStyle = "rgb(150,0,150)";
  CTX.fill();
}

function squareFractal(sz, level) {
  if(level == 0) {
    CTX.rect(0,0,sz,sz)
  } else {
    squareFractal(sz/2, level - 1)
    CTX.translate(sz/2.0,0)
    squareFractal(sz/2, level - 1)
    CTX.translate(-sz/2.0,sz/2.0)
    squareFractal(sz/2, level - 1)
  }
}

function radians(angle) {
  return (angle * Math.PI) / 180;
}

function map(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

setup();
draw();