const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')


function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)
    CTX.translate(300, 500)

}

function draw(level, angle) {
    CTX.beginPath()
    CTX.rect(-300, -500, CANVAS.width, CANVAS.height)
    CTX.fillStyle = 'white'
    CTX.closePath()
    CTX.fill()

    CTX.beginPath()
    y(100, level, angle)
    CTX.closePath()
    CTX.strokeStyle = 'black'
    CTX.stroke()
}

function y(sz, level, mouse) {
    if (level > 0) {
        CTX.moveTo(0,0)
        CTX.lineTo(0, -sz)
        CTX.translate(0,-sz)
        let angle = parseInt(map(mouse, 0, CANVAS.height, 0, 180))
        CTX.rotate(radians(angle))

        y(0.8*sz,level-1)

        CTX.rotate(radians(-2 * angle))

        y(0.8*sz,level-1)

        CTX.rotate(radians(angle))
        CTX.translate(0,sz)
    }
}

function radians(angle) {
    return angle * Math.PI / 180
}

setup()

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

CANVAS.addEventListener('mousemove', (e) => {
    let level = parseInt(map(e.clientX, 0, CANVAS.width, 0,10))
    
    draw(level, e.clientY)
})