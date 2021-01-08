const CANVAS = document.createElement("canvas");
const CTX = CANVAS.getContext("2d");

let level = 1;
function setup() {
  CANVAS.width = 600;
  CANVAS.height = 600;
  document.body.appendChild(CANVAS);
  CTX.translate(CANVAS.width/2,CANVAS.height/2)
}

function draw() {
  CTX.beginPath();
  CTX.fillStyle = "white";
  CTX.closePath();
  CTX.fill();

  leftDragon(5, 11);
  CTX.closePath();
  CTX.stroke();
}

function leftDragon(sz, level) {
  if(level == 0) {
    CTX.moveTo(0,0)
    CTX.lineTo(sz, 0)
    CTX.translate(sz,0)
  } else {
    leftDragon(sz,level-1)
    CTX.rotate(radians(-90))
    rightDragon(sz,level-1)
  }
}

function rightDragon(sz, level) {
  if(level == 0) {
    CTX.moveTo(0,0)
    CTX.lineTo(sz, 0)
    CTX.translate(sz,0)
  } else {
    leftDragon(sz,level-1)
    CTX.rotate(radians(90))
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