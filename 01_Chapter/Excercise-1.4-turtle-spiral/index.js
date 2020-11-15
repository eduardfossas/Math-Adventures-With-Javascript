const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(window.innerWidth / 2, window.innerHeight/2);

function drawSquare(size = 100) {
    ctx.beginPath()
    ctx.rect(0,0,size,size)
    ctx.lineWidth = 0.5;
    ctx.stroke()
    
}

function drawSquares() {
    for(let i = 0, size = 5; i < 60; i++, size+=5) {
        ctx.rotate(5 * (Math.PI / 180))
        drawSquare(25 + size)
    }
}

drawSquares()

