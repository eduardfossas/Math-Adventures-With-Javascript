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
  leftDragon(500, 7);
  CTX.closePath();
  CTX.fillStyle = "rgb(150,0,150)";
  CTX.fill();
}

function leftDragon(sz, level) {
  if(level == 0) {
    CTX.moveTo(0,0)
    CTX.lineTo(sz, 0)
  } else {
    leftDragon(sz,level-1)
    CTX.rotate(radians(-90))
    rightDragon(sz,level-1)
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