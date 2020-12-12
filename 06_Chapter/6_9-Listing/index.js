const canvas = document.createElement('canvas')
canvas.width = 1240
canvas.height = 600

const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

ctx.translate(canvas.width / 6, canvas.height / 2)

let list = ["I","love","using","Javascript"]

function draw() {
   for (let [i, key] of list.entries()) {
       console.log(i, key)
   }
}

draw()