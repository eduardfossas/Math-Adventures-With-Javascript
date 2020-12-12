const canvas = document.createElement('canvas')
canvas.width = 600
canvas.height = 600
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(canvas.width / 2, canvas.height / 2)

let t = 0;


function draw() {
    let a1 = 100;
    let a2 = 200;
    let f1 = 1;
    let f2 = 2;
    let p1 = 0;
    let p2 = Math.PI/2;
    let d1 = 0.02;
    let d2 = 0.02;


    let x = a1 * Math.cos(f1 * t + p1) * Math.exp(-d1 * t)
    let y = a2 * Math.cos(f2 * t + p2) * Math.exp(-d2 * t)
    
    ctx.clearRect(-300, -300, canvas.width * 2, canvas.height * 2)

    ctx.beginPath()
    ctx.arc(x,y,5,0, Math.PI * 2)
    ctx.stroke()

    
    requestAnimationFrame(draw)
    t += 0.1
}

draw()