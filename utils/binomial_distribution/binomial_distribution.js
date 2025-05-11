const canvas = document.getElementById('histogram')
const ctx = canvas.getContext('2d')
let width = document.getElementById('input-form').clientWidth
canvas.width = width - 24
window.addEventListener('resize', () => {
    let width = document.getElementById('input-form').clientWidth
    canvas.width = width - 24
})

function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i
    }
    return res
}

function PX(n, p, k) {
    return fact(n)/(fact(k)*fact(n-k)) * p**k * (1 - p)**(n - k)
}

function calc() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    canvas.style.display = 'block'
    const n = parseInt(document.getElementById('n').value)
    const p = document.getElementById('p').value
    const kmin = document.getElementById('k-min').value
    const kmax = document.getElementById('k-max').value
    const barWidth = canvas.width / (n + 1)
    let ins = 0
    for(let i = 0; i < n + 1; i++){
        let P = PX(n, p, i)
        if (i >= kmin && i <= kmax) {
            ins += P
            ctx.fillStyle = 'rgb(123, 104, 238)'
        } else {
            ctx.fillStyle = 'gray'
        }
        let height = canvas.height * P
        ctx.fillRect(i*barWidth, canvas.height - height, barWidth, height)
        ctx.fillStyle = 'black'
        ctx.fillRect(i*barWidth, 0, 1, canvas.height)
        ctx.fillRect(i*barWidth, 0, 1, canvas.height)
    }
    document.getElementById('ans').style.display = 'block'
    document.getElementById('ans').innerText = 'P(X) = ' + Math.floor(ins * 100000) / 100000
}

calc()