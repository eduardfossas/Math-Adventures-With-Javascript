const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(50, 80);

function draw() {
    ctx.rect(20,40,50,30)
    ctx.fill()
    
}

draw()