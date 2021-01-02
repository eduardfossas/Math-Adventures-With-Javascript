function magnitude(z) {
    return Math.sqrt(z[0]**2 + z[1]**2)
}

function cAdd(a,b) {
    return [a[0] + b[0], a[1] + b[1]]
}

function cMult(a,b) {
    return [a[0] * b[0] - a[1]* b[1], a[1] * b[0] + a[0] * b[1]]
}


function mandelbrot(z, num) {
    let count = 0;
    let z1 = z;

    while(count <= num) {
        if(magnitude(z1) > 2.0) return count
        z1 = cAdd(cMult(z1,z1), z)
        count += 1
    }

    return num;
}

console.log(magnitude([2,1]))