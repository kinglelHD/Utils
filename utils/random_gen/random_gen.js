function calc() {
    document.querySelector('.output').style.display = 'block'
    const min = document.getElementById('min').value
    const max = document.getElementById('max').value
    document.querySelector('.output').innerText = Math.floor(Math.random() * max) + parseInt(min)
}