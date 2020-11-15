const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(window.innerWidth / 2, window.innerHeight/2);

function drawTriangle(sideLength = 100) {
    ctx.beginPath()
    ctx.moveTo(0, -sideLength / 2);
    ctx.lineTo(sideLength, sideLength);
    ctx.rotate(90 * (Math.PI / 180))
    ctx.lineTo(sideLength, sideLength);
    ctx.closePath()
    ctx.stroke()
    
}

drawTriangle(200)