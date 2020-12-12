const canvas = document.createElement('canvas')
canvas.width = 600
canvas.height = 600
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(canvas.width / 2, canvas.height / 2)

let t = 0;
let points = []

function harmonograph() {
    let a1 = a2 = a3 = a4 = 100;
    let f1 = 2.01;
    let f2 = 3;
    let f3 = 3;
    let f4 = 2;
    let p1 = Math.PI/6;
    let p2 = 0;
    let p3 = -Math.PI/16;
    let p4 = 0;
    let d1 = 0.00085;
    let d2 = 0.0065;
    let d3 = 0;
    let d4 = 0;


    let x = a1 * Math.cos(f1 * t + p1) * Math.exp(-d1 * t) + a3 * Math.cos(f3 * t + p3) * Math.exp(-d3 * t)
    let y = a2 * Math.sin(f2 * t + p2) * Math.exp(-d2 * t) + a4 * Math.sin(f4 * t + p4) * Math.exp(-d4 * t)

    return [x,y]
}


function draw() {
    while(t < 200) {
        points.push(harmonograph(t))
        t += 0.01
    }
    
    ctx.clearRect(-300, -300, canvas.width * 2, canvas.height * 2)

    ctx.beginPath()

    for(let i = 0; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1])
    }
    ctx.strokeStyle = 'red'
    ctx.stroke()
    
    requestAnimationFrame(draw)
}

draw()