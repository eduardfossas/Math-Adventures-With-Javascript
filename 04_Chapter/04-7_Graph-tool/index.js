const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

ctx.translate(window.innerWidth / 2, window.innerHeight / 2);

let xmin = -10;
let xmax = 10;

let ymin = -10;
let ymax = 10;

let rangex = ymax - xmin;
let rangey = ymay - ymin;

let xsc1, ysc1;

function setup() {
  canvas.width = 600;
  canvas.height = 600;
  xsc1 = canvas.width / rangex;
  ysc1 = -canvas.height / rangey;
}