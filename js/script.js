//animação no header
const header = document.querySelector('#header')

window.addEventListener('scroll', function(){
    header.classList.toggle('active', window.scrollY > 5)
})

//animação de aparecer
const container = document.querySelector('.container')
const apresentacao = document.querySelector('.apresentacao')

setTimeout(() => {
    apresentacao.classList.add('show')
}, 200)
setTimeout(() => {
    apresentacao.classList.remove('show')
    setTimeout(() => {
        apresentacao.style.display = "none"
    }, 1000)
}, 2500)

setTimeout(() => {
    container.style.display = "block"
}, 2989)

setTimeout(() => {
    container.classList.add('show')
}, 3000)


//animação de aparecer no scroll
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if((entry.isIntersecting) === true ){
            entry.target.classList.add('show')
        }
    })
})

const elements = document.querySelectorAll('.element')
elements.forEach((element) => myObserver.observe(element))


//Modo noturno
const modoNoturnoBtn = document.querySelector('.modoNoturnoContainer');
modoNoturnoBtn.addEventListener('click', () => {
    document.body.classList.toggle('modoNoturnoActive');
})

//Lista Mobile
const btnMobileList = document.querySelector('.btnMobileList')
btnMobileList.addEventListener('click', () => {
    const listBarContainer = document.querySelector('.listBarContainer')
    listBarContainer.classList.toggle('active')
})