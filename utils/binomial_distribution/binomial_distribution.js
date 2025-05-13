const input_form = document.getElementById('input-form')
const close_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07m1.41-1.41A8 8 0 1 0 15.66 4.34A8 8 0 0 0 4.34 15.66m9.9-8.49L11.41 10l2.83 2.83l-1.41 1.41L10 11.41l-2.83 2.83l-1.41-1.41L8.59 10L5.76 7.17l1.41-1.41L10 8.59l2.83-2.83z"/></svg>'
let kinput_array = []
/* 
1. gleich
2. größer
3. kleiner
4. höchstens
5. mindestens
6. größer-kleiner
7. größer-höchstens
8. mindestens-kleiner
9. mindestens-höchstens
*/

class KInput {
    constructor(k_select) {
        this.isvalid = true
        this.karray = []
        this.k_select = parseInt(k_select)
        this.div = document.createElement('div')
        this.div.classList.add('k-input')
        this.p = document.createElement('p')
        this.text = ""
        this.delet_btn = document.createElement('button')
        this.delet_btn.type = 'button'
        this.delet_btn.innerHTML = close_svg
        this.delet_btn.addEventListener('click', () => {
            input_form.removeChild(this.div)
            kinput_array = kinput_array.filter(kinput => kinput != this)
            calc()
        })
        this.a_label = document.createElement('label')
        this.a_label.for = 'a'
        this.a_label.innerText = 'a: '
        this.a_input = document.createElement('input')
        this.a_input.type = 'number'
        this.a_input.value = this.k_select == 3 ? 1 : 0
        this.a_input.min = this.k_select == 3 ? 1 : 0
        this.a_input.max = document.getElementById('n').value != "" ? parseInt(document.getElementById('n').value) : 0
        this.a_input.id = 'a'
        this.a_input.addEventListener('input', () => {
            this.updateKarrayMax()
            this.updateText()
            this.p.innerText = this.text
            calc()
        })
        this.div.appendChild(this.p)
        this.div.appendChild(this.delet_btn)
        this.div.appendChild(this.a_label)
        this.div.appendChild(this.a_input)
        if (k_select >= 6) {
            this.b_label = document.createElement('label')
            this.b_label.for = 'b'
            this.b_label.innerText = 'b: '
            this.b_input = document.createElement('input')
            this.b_input.type = 'number'
            this.b_input.value = 0
            this.b_input.min = 0
            this.b_input.id = 'b'
            this.b_input.addEventListener('input', () => {
                this.updateKarrayMax()
                this.updateText()
                this.p.innerText = this.text
                calc()
        })
            this.div.appendChild(this.b_label)
            this.div.appendChild(this.b_input)
        }
        this.updateText()
        this.p.innerText = this.text
        input_form.appendChild(this.div)
        kinput_array.push(this)
        calc()
    }
    updateKarrayMax(n = document.getElementById('n').value != "" ? parseInt(document.getElementById('n').value) : 0) {
        this.karray = []
        if (this.b_input) {
            this.b_input.max = n
        }
        switch (this.k_select) {
            case 1:
                this.a_input.max = n
                this.karray.push(Math.min(this.a_input.max, this.a_input.value))
                break;
            case 2:
                this.a_input.max = n - 1
                for (let i = Math.min(this.a_input.max, this.a_input.value) + 1; i < n + 1; i++) {
                    this.karray.push(i)
                }
                break;
            case 3:
                this.a_input.max = n
                for (let i = 0; i < Math.min(this.a_input.max, this.a_input.value); i++) {
                    this.karray.push(i)
                }
                break;
            case 4:
                this.a_input.max = n
                for (let i = 0; i < Math.min(this.a_input.max, this.a_input.value) + 1; i++) {
                    this.karray.push(i)
                }
                break;
            case 5:
                this.a_input.max = n
                for (let i = Math.min(this.a_input.max, this.a_input.value); i < n + 1; i++) {
                    this.karray.push(i)
                }
                break;
            case 6:
                this.a_input.max = Math.min(n, this.b_input.value - 2)
                for (let i = Math.min(this.a_input.max, this.a_input.value) + 1; i < Math.min(this.b_input.max, this.b_input.value); i++) {
                    this.karray.push(i)
                }
                break;
            case 7:
                this.a_input.max = Math.min(n, this.b_input.value - 1)
                for (let i = Math.min(this.a_input.max, this.a_input.value) + 1; i < Math.min(this.b_input.max, this.b_input.value) + 1; i++) {
                    this.karray.push(i)
                }
                break;
            case 8:
                this.a_input.max = Math.min(n, this.b_input.value - 1)
                for (let i = Math.min(this.a_input.max, this.a_input.value); i < Math.min(this.b_input.max, this.b_input.value); i++) {
                    this.karray.push(i)
                }
                break;
            case 9:
                this.a_input.max = Math.min(n, this.b_input.value)
                for (let i = Math.min(this.a_input.max, this.a_input.value); i < Math.min(this.b_input.max, this.b_input.value) + 1; i++) {
                    this.karray.push(i)
                }
                break;
        }
        if (this.k_select >= 6) {
            this.isvalid = this.a_input.checkValidity() && this.b_input.checkValidity()
        } else {
            this.isvalid = this.a_input.checkValidity()
        }
    }
    updateText() {
        switch (this.k_select) {
            case 1:
                this.text = `P(X = ${this.a_input.value})`
                break;
            case 2:
                this.text = `P(X > ${this.a_input.value})`
                break;
            case 3:
                this.text = `P(X < ${this.a_input.value})`
                break;
            case 4:
                this.text = `P(X ≤ ${this.a_input.value})`
                break;
            case 5:
                this.text = `P(X ≥ ${this.a_input.value})`
                break;
            case 6:
                this.text = `P(${this.a_input.value} < X < ${this.b_input.value})`
                break;
            case 7:
                this.text = `P(${this.a_input.value} < X ≤ ${this.b_input.value})`
                break;
            case 8:
                this.text = `P(${this.a_input.value} ≤ X < ${this.b_input.value})`
                break;
            case 9:
                this.text = `P(${this.a_input.value} ≤ X ≤ ${this.b_input.value})`
                break;
        }
    }
}

const canvas = document.getElementById('histogram')
const ctx = canvas.getContext('2d')
let width = input_form.clientWidth
canvas.width = width - 24
canvas.style.width = width + 'px'
window.addEventListener('resize', () => {
    let width = input_form.clientWidth
    canvas.width = width - 24
    canvas.style.width = width + 'px'
    calc()
})

function fact(n) { // n!
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
    const n = document.getElementById('n').value != "" ? parseInt(document.getElementById('n').value) : 0
    const p = document.getElementById('p').value
    const barWidth = canvas.width / (n + 1)
    let karray = []
    let text = ''
    kinput_array.forEach(kinput => {
        kinput.updateKarrayMax(n)
        if (kinput.isvalid) {
            text += " + " + kinput.text
            kinput.karray.forEach(k => {
                karray.push(k)
            })
        }
    })
    if (text != '') {
        text = text.slice(3)
        const set = new Set(karray)
        if (karray.length != set.size) {
            document.getElementById('warning').style.display = 'block'
        } else {
            document.getElementById('warning').style.display = 'none'
        }
    } else {
        text = 'P(X)'
    }
    let ins = 0
    let P_array = []
    let max = 0
    for(let i = 0; i < n + 1; i++){
        let P = PX(n, p, i)
        if (karray.includes(i)) {
            const array = karray.filter(k => k == i)
            ins += P * array.length
        }
        P_array.push(P)
        if (P * canvas.height > max) max = P * canvas.height
    }
    const scale = canvas.height / max * 0.8
    for(let i = 0; i < P_array.length; i++){
        let P = P_array[i]
        if (karray.includes(i)) {
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
    document.getElementById('ans').innerText = text + ' ≈ ' + Math.floor(ins * 100000000) / 100000000
}

new KInput(1)