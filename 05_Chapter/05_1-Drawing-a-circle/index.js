const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)


function draw() {
    ctx.arc(200, 100, 20, 0, Math.PI * 2)
    ctx.fill()
    
}

draw()