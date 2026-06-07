let utils = []

class Util {
    constructor(name, description, link, bg_color = '#7b68ee', text_color = 'black', header_image_link = null, not_implemented = false) {
        this.name = name;
        this.description = description;
        this.link = link;
        this.bg_color = bg_color;
        this.text_color = text_color;
        this.header_image_link = header_image_link;
        this.not_implemented = not_implemented;
    }
    createElement() {
        const a = document.createElement("a");
        a.classList.add("util");
        if (this.not_implemented) {
            a.classList.add("not-implemented");
        } else {
            a.href = this.link;
        }
        if (this.header_image_link) {
            const img = document.createElement("img");
            img.alt = this.name;
            img.classList.add("util-header-image");
            img.src = this.header_image_link;
            a.appendChild(img);
        } else {
            const h2 = document.createElement("h2");
            h2.textContent = this.name;
            h2.style.backgroundColor = this.bg_color;
            h2.style.color = this.text_color;
            a.appendChild(h2);
        }
        const p = document.createElement("p");
        p.textContent = this.description;
        a.appendChild(p);
        return a;
    }
}

function addUtil(util) {
    utils.push(util);
    document.querySelector('nav').appendChild(util.createElement());
}

addUtil(new Util('QR Code Generator', 'generate QR Codes', 'utils/qr-code-gen/qr-code-gen.html', 'white', 'black', 'assets/NeverGonnaGiveYouUp.png'))
addUtil(new Util('File Share', 'share files (redirect)', 'https://fileshare-xc6v.onrender.com', 'blueviolet'))
addUtil(new Util('Random Generator', 'generate random numbers', 'utils/random_gen/random_gen.html', 'yellow'))
addUtil(new Util('Caesar Cipher', 'ver- und entschlüsseln', 'utils/caesar_cipher/caesar_cipher.html', 'rgb(128, 34, 34)', 'rgb(235, 199, 137)'))
addUtil(new Util('Binomial Distribution', 'calculate probabilities', 'utils/binomial_distribution/binomial_distribution.html', 'midnightblue', 'white'))
addUtil(new Util('Hex Dec Bin Converter', 'convert number formats', 'utils/hex-dec-bin/hex-dec-bin.html', 'darkolivegreen', 'black', null, true))
addUtil(new Util('Color Picker', 'choose your own color', 'utils/color-picker/color-picker.html', 'burlywood', 'black', null, true))
addUtil(new Util('Counter', 'keep track of count (redirect)', 'https://hilmardd.netlify.app/counter', 'deeppink'))
addUtil(new Util('Wizard', 'ein digitaler Block der Wahrheit (redirect)', 'https://blockderwahrheit.netlify.app', '#E50005','#FDB702'))
addUtil(new Util('Device Info', 'for debugging', 'utils/device-info/device-info.html', 'aqua'))
