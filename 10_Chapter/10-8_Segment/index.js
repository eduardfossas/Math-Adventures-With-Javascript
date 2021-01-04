const CANVAS = document.createElement("canvas");
const CTX = CANVAS.getContext("2d");

function setup() {
  CANVAS.width = 600;
  CANVAS.height = 600;
  document.body.appendChild(CANVAS);
  CTX.translate(100,200)
}

function draw() {
  CTX.beginPath();
  CTX.rect(0, 0, CANVAS.width, CANVAS.height);
  CTX.fillStyle = "white";
  CTX.closePath();
  CTX.fill();

  CTX.beginPath();
  snowflake(400, 3);
  CTX.closePath();
  CTX.strokeStyle = "black";
  CTX.stroke();
}

function snowflake(sz, level) {
  for (let i = 0; i < 3; i++) {
    segment(sz,level)
    CTX.rotate(radians(120));
  }
}

function segment(sz, level) {
  if (level == 0) {
    CTX.moveTo(0, 0);
    CTX.lineTo(sz, 0);
    CTX.translate(sz, 0);
  } else {
    segment(sz/3, level - 1)
    CTX.rotate(radians(-60));
    segment(sz/3, level - 1)
    CTX.rotate(radians(120));
    segment(sz/3, level - 1)
    CTX.rotate(radians(-60));
    segment(sz/3, level - 1)
  }
}

function radians(angle) {
  return (angle * Math.PI) / 180;
}

setup();
draw();
