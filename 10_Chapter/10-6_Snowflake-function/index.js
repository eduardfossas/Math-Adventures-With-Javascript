const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')


function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)
}

function draw(level, angle) {
    CTX.beginPath()
    CTX.rect(0, 0, CANVAS.width, CANVAS.height)
    CTX.fillStyle = 'white'
    CTX.closePath()
    CTX.fill()

    CTX.beginPath()
    snowflake(400, 1)
    CTX.closePath()
    CTX.strokeStyle = 'black'
    CTX.stroke()
}

function snowflake(sz, level) {
    for(let i =0; i < 3; i++) {
        CTX.moveTo(0,0)
        CTX.lineTo(sz,0)
        CTX.translate(sz,0)
        CTX.rotate(radians(120))
    }
}

function radians(angle) {
    return angle * Math.PI / 180
}


setup()
draw()
