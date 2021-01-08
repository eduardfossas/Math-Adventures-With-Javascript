const CANVAS = document.createElement("canvas");
const CTX = CANVAS.getContext("2d");

let level = 1;
function setup() {
  CANVAS.width = 600;
  CANVAS.height = 600;
  document.body.appendChild(CANVAS);
  CTX.translate(50,450)
}

function draw() {
  CTX.beginPath();
  CTX.rect(-100, -200, CANVAS.width, CANVAS.height);
  CTX.fillStyle = "white";
  CTX.closePath();
  CTX.fill();

  CTX.beginPath();
  sierpinski(400, 8);
  CTX.closePath();
  CTX.strokeStyle = "black";
  CTX.stroke();
}

function sierpinski(sz, level) {
  if(level == 0) {
    CTX.moveTo(0,0)
    CTX.lineTo(sz,0)

    CTX.moveTo(sz,0)
    CTX.lineTo(sz / 2, -sz*Math.sqrt(3)/2)

    CTX.moveTo(sz / 2, -sz*Math.sqrt(3)/2)
    CTX.lineTo(0,0)
  }
  else {
    for(let i = 0; i < 3; i++) {
      sierpinski(sz / 2, level - 1)
      CTX.translate(sz / 2, -sz * Math.sqrt(3) / 2)
      CTX.rotate(radians(120))
    }
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