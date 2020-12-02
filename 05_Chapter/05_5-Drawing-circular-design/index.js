const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(window.innerWidth / 2, window.innerHeight/2);

function radians(angle) {
    return angle * Math.PI / 180
}

function draw() {
    for(let i =0; i < 24; i++) {
        ctx.beginPath()
        ctx.arc(200, 100, 20, 0, 2 * Math.PI)
        ctx.rotate(radians(360) / 12)
        ctx.stroke()
    }  
}

draw()