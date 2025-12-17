const ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function cipher_func() {
    const input = document.getElementById('text')
    const output = document.getElementById('output')

    output.innerHTML = ""
    
    let i = 0
    while (i < 26) {
        i++
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')

        h2.innerText = `Shift: ${i}`
        p.innerText = cipher(i, input.value)

        div.appendChild(h2)
        div.appendChild(p)

        output.appendChild(div)
    }
}

function cipher(shift, string) {
    let output = ""
    for(let i = 0; i < string.length; i++) {
        const letter = string[i]
        if (!ABC.includes(letter.toUpperCase())) {
            output += letter // Falls nicht im ABC
        } else {
            const index = (ABC.indexOf(letter.toUpperCase()) + shift) % 26
            if (letter === letter.toUpperCase()) {
                output += ABC[index]
            } else {
                output += ABC[index].toLowerCase()
            }
        }
    }
    return output
}