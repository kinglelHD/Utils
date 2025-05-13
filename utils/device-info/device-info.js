
let info = document.getElementById('info')
let innerWidth = document.createElement('p')
let innerHeight = document.createElement('p')
let screenWidth = document.createElement('p')
let screenHeight = document.createElement('p')
let screenAvailWidth = document.createElement('p')
let screenAvailHeight = document.createElement('p')
let userAgent = document.createElement('p')
let platform = document.createElement('p')
let language = document.createElement('p')
let onLine = document.createElement('p')
const gl = document.createElement('canvas').getContext('webgl');
let glV = document.createElement('p')
let GPU_ifo = document.createElement('p')
let ontouchstart_p = document.createElement('p')
ontouchstart_p.innerText = 'ontouchstart: ' + ('ontouchstart' in window)
glV.innerText = 'gl.VERSION: ' + gl.getParameter(gl.VERSION)
GPU_ifo.innerText = 'gl.VENDOR: ' +  gl.getParameter(gl.VENDOR)
innerWidth.innerText = 'window.innerWidth: ' + window.innerWidth + 'px'
innerHeight.innerText = 'window.innerHeight: ' + window.innerHeight + 'px'
screenWidth.innerText = 'screen.width: ' + screen.width + 'px'
screenHeight.innerText = 'screen.height: ' + screen.height + 'px'
screenAvailWidth.innerText = 'screen.availWidth: ' + screen.availWidth + 'px'
screenAvailHeight.innerText = 'screen.availHeight: ' + screen.availHeight + 'px'
userAgent.innerText = 'navigator.userAgent: ' + navigator.userAgent
platform.innerText = 'navigator.platform: ' + navigator.platform
language.innerText = 'navigator.language: ' + navigator.language
onLine.innerText = 'navigator.onLine: ' + navigator.onLine
window.addEventListener('resize', () => {
    innerWidth.innerText = 'window.innerWidth: ' + window.innerWidth + 'px'
    innerHeight.innerText = 'window.innerHeight: ' + window.innerHeight + 'px'
    screenAvailWidth.innerText = 'screen.availWidth: ' + screen.availWidth + 'px'
    screenAvailHeight.innerText = 'screen.availHeight: ' + screen.availHeight + 'px'
})
info.appendChild(innerWidth)
info.appendChild(innerHeight)
info.appendChild(screenWidth)
info.appendChild(screenHeight)
info.appendChild(screenAvailWidth)
info.appendChild(screenAvailHeight)
info.appendChild(userAgent)
info.appendChild(platform)
info.appendChild(language)
info.appendChild(onLine)
info.appendChild(glV)
info.appendChild(GPU_ifo)
info.appendChild(ontouchstart_p)