document.getElementById('qr-form').addEventListener('submit', (e) => {
    e.preventDefault()
    generate()
})

function generate() {
    let div = document.getElementById('qrcode')
    div.innerHTML = ""
    div.style.display = "block"
    let content = document.getElementById('content-input').value == "" ? "empty" : document.getElementById('content-input').value
    new QRCode("qrcode", content)
    let p = document.createElement('p')
    p.innerText = content
    div.appendChild(p)
}