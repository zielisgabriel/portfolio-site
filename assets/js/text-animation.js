// eu tô comentando pq estou aprendendo esse novo método que aprendi, não peguei de chatgpt. ouviu? KKKKKKKK

const textChange = document.querySelector('.text-change')
const textsUsed = [ "Web", "Front-end", "Back-end"]
const typingDelay = 100 // tempo entre digitar cada letra (100ms)
const erasingDelay = 80 // tempo entre apagar cada letra (150ms)
const newTextDelay = 800 // pausa antes de começar nova palavra (1s)
let textArrayIndex = 0 // índice da palavra atual do array
let charIndex = 0 // índice do caractere atual da palavra

// a função type() é responsável por "digitar" o texto
function type(){
    if(charIndex >= textsUsed[textArrayIndex].length){
        setTimeout(erase, newTextDelay)
    } else {
        textChange.textContent = textsUsed[textArrayIndex].substring(0, charIndex + 1)
        ++charIndex
        setTimeout(type, typingDelay)
    }
}

// a função erase() é responsável por "apagar" o texto
function erase(){
    if(charIndex > 0){
        textChange.textContent = textsUsed[textArrayIndex].substring(0, charIndex - 1)
        --charIndex
        setTimeout(erase, erasingDelay)
    } else {
        if(textArrayIndex >= textsUsed.length - 1){
            textArrayIndex = 0
            setTimeout(type, newTextDelay)
        } else {
            ++textArrayIndex
            setTimeout(type, newTextDelay)
        }
    }
}

// a função init() é responsável por inicializar a animação
function init() {
    // define o texto que irá aparecer na tela
    textChange.textContent = textsUsed[textArrayIndex]
    charIndex = textsUsed[textArrayIndex].length
    // começa a apagar o texto
    setTimeout(erase, erasingDelay)
}

init()