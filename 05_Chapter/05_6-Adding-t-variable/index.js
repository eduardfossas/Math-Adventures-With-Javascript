const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(window.innerWidth / 2, window.innerHeight/2);

function radians(angle) {
    return angle * Math.PI / 180
}

let t = 0;

function draw() {
    
    ctx.rotate(t)
    ctx.clearRect(0 - canvas.width / 2, 0 - canvas.height / 2, canvas.width, canvas.height);

    for(let i = 0; i < 12; i++) {
        ctx.beginPath()
        ctx.arc(200, 100, 20, 0, 2 * Math.PI)
        ctx.rotate(radians(360) / 12)
        ctx.stroke()
    }
    requestAnimationFrame(draw)
    t = 0.016
    
}

requestAnimationFrame(draw)