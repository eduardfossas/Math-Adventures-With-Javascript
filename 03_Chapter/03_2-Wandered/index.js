const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

let i = 0;
function animate() {
  if (true) {
    ctx.beginPath();
    ctx.moveTo(0, 0); // Begin first sub-path
    ctx.lineTo(i, i);
    if(i < window.innerHeight) {
        i++
    }
    ctx.stroke();
    requestAnimationFrame(animate);
    console.log(i > window.innerHeight)
   
  }
}

requestAnimationFrame(animate);
