const canvas = document.createElement('canvas')
canvas.width = 600
canvas.height = 600

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(2.5, 2.5)

function radians(angle) {
    return angle * Math.PI / 180
}

const getpos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx =
            e.clientX +
            document.body.scrollLeft +
            document.documentElement.scrollLeft;
        posy =
            e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return { x: posx, y: posy };
};

const dis = (ux, uy, vx, vy) => {
    let x = ux - vx;
    var y = uy - vy;
    return Math.sqrt((x * x) + (y * y));
};

function draw(e) {
    let m = getpos(e)
    ctx.clearRect(0,0,canvas.width, canvas.height)

    for (let x = 0; x < 20; x++) {
        for (let y = 0; y < 20; y++) {
            let d = dis(30 * x, 30 * y, m.x, m.y)
            ctx.beginPath();
            ctx.rect(30 * x, 30 * y, 25, 25)
            ctx.fillStyle = 'hsl(' + 0.5 * d + ',100%,40%)';
            ctx.fill();
        }
    }
}

canvas.addEventListener('mousemove', (e) => draw(e))
