const canvas = document.getElementById('histogram')
const ctx = canvas.getContext('2d')
let width = document.getElementById('input-form').clientWidth
canvas.width = width - 24
canvas.style.width = width + 'px'
window.addEventListener('resize', () => {
    let width = document.getElementById('input-form').clientWidth
    canvas.width = width - 24
    canvas.style.width = width + 'px'
    calc()
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
    let P_array = []
    let max = 0
    for(let i = 0; i < n + 1; i++){
        let P = PX(n, p, i)
        if (i >= kmin && i <= kmax) ins += P
        P_array.push(P)
        if (P * canvas.height > max) max = P * canvas.height
    }
    const scale = canvas.height / max * 0.8
    for(let i = 0; i < P_array.length; i++){
        let P = P_array[i]
        if (i >= kmin && i <= kmax) {
            ctx.fillStyle = 'rgba(123, 104, 238, 0.25)'
            ctx.fillRect(i*barWidth, 0, barWidth, canvas.height)
            ctx.fillStyle = 'rgb(123, 104, 238)'
        } else {
            ctx.fillStyle = 'gray'
        }
        let height = canvas.height * P * scale
        ctx.fillRect(i*barWidth, canvas.height - height, barWidth, height)
        ctx.fillStyle = 'black'
        ctx.fillRect(i*barWidth, 0, 1, canvas.height)
    }
    ctx.fillRect((n+1)*barWidth - 1, 0, 1, canvas.height)
    document.getElementById('ans').style.display = 'block'
    document.getElementById('ans').innerText = `P(${kmin == kmax ? "X = " + kmin : kmin + " ≤ X ≤ " + kmax}) = ` + Math.floor(ins * 100000) / 100000
}

calc()