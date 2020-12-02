const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);


let xmin = -10;
let xmax = 10;

let ymin = -10;
let ymax = 10;

let rangex = ymax - xmin;
let rangey = ymax - ymin;

let xsc1, ysc1;

function setup() {
  canvas.width = 600;
  canvas.height = 600;
  xsc1 = canvas.width / rangex;
  ysc1 = -canvas.height / rangey;
}

function draw() {
  ctx.translate(600 / 2, 600 / 2);
  ctx.fillStyle = "white";
  ctx.fill();
  for (let i = xmin; i <= xmax; i++) {
    console.log(xsc1)
    console.log(i);
    ctx.beginPath();
    ctx.moveTo(i*xsc1, 0);
    ctx.lineTo(i*xsc1, 600);
    ctx.stroke();
  }
}

setup();
draw();
