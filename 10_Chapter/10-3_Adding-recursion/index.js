const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d')


function setup() {
    CANVAS.width = 600
    CANVAS.height = 600
    document.body.appendChild(CANVAS)

}

function draw() {
    CTX.beginPath()
    CTX.rect(0, 0, CANVAS.width, CANVAS.height)
    CTX.closePath()
    CTX.translate(300, 500)
    CTX.beginPath()
    y(100, 4)
    CTX.closePath()
    CTX.strokeStyle = 'black'
    CTX.stroke()
    requestAnimationFrame(() => draw())
}

function y(sz, level) {
    if (level > 0) {
        CTX.moveTo(0,0)
        CTX.lineTo(0, -sz)
        CTX.translate(0,-sz)

        CTX.rotate(radians(30))

        y(0.8*sz,level-1)

        CTX.rotate(radians(-60))

        y(0.8*sz,level-1)

        CTX.rotate(radians(30))
        CTX.translate(0,sz)
    }
}

function radians(angle) {
    return angle * Math.PI / 180
}

setup()
requestAnimationFrame(() => draw())