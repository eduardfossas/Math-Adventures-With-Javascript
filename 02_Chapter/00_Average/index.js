const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(window.innerWidth / 2, window.innerHeight/2);

function drawSquare(size = 100) {
    ctx.rotate(Math.PI / 30)
    ctx.beginPath()
    ctx.rect(0,0,size,size)
    ctx.stroke()
    
}

for(let i = 0; i < 60; i++) {
    drawSquare(220)
}