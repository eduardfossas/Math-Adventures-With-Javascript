const canvas = document.createElement('canvas')
canvas.width = 600
canvas.height = 600
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(canvas.width / 2, canvas.height / 2)


let xmin = -2;
let xmax = 2;

let ymin = -2;
let ymax = 2;

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


function julia(z, c, num) {
    let count = 0;
    let z1 = z;

    while (count <= num) {
        console.log(magnitude(z1))
        if (magnitude(z1) > 2) return count
        z1 = cAdd(cMult(z1, z1), c)
        count += 1
    }
    return num;
}

function draw() {
    let x = xmin;
    let y = ymin;
    let z;
    let c;

    while (x < xmax) {
        while (y < ymax) {
            z = [x, y]
            c = [-0.8, 0.156]

            let col = julia(z, c, 100)

            if (col == 100) {
                ctx.fillStyle = 'black'
            }
            else {
                ctx.fillStyle = `hsl(${3 * col},60%,50%)`
            }

            ctx.beginPath()
            ctx.rect(x, y, 1, 1)
            ctx.fill()
            ctx.closePath()

            y+= 0.01
        }
        x+= 0.01

    }
}

draw()