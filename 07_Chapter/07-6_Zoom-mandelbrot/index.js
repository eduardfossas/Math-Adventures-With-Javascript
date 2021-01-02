const canvas = document.createElement('canvas')
canvas.width = 600
canvas.height = 600
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)


let xmin = -0.25;
let xmax = 0.25;

let ymin = -1;
let ymax = -0.5;

let rangex = xmax - xmin;
let rangey = ymax - ymin;

let xscl = rangex / canvas.width;
let yscl = rangey / canvas.height

function magnitude(z) {
    return Math.sqrt(z[0] ** 2 + z[1] ** 2)
}

function cAdd(a, b) {
    return [a[0] + b[0], a[1] + b[1]]
}

function cMult(a, b) {
    return [a[0] * b[0] - a[1] * b[1], a[1] * b[0] + a[0] * b[1]]
}


function mandelbrot(z, num) {
    let count = 0;
    let z1 = z;

    while (count <= num) {
        if (magnitude(z1) > 2.0) return count
        z1 = cAdd(cMult(z1, z1), z)
        count += 1
    }

    return num;
}

function draw() {
    for (let x = 0; x <= 600; x++) {
        for (let y = 0; y <= 600; y++) {
            let z = [(xmin + x * xscl), (ymin + y * yscl)]

            let col = mandelbrot(z, 100)

            if(col == 100) {
                ctx.fillStyle = 'black'
            }
            else {
                ctx.fillStyle = 'white'
            }

            ctx.beginPath()
            ctx.rect(x,y,1,1)
            ctx.fill()
            ctx.closePath()
        }
    }
}

draw()