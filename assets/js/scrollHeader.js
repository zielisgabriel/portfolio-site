const header = document.getElementById('header')
window.addEventListener('DOMContentLoaded', () => {
    header.classList.toggle('scrolling', window.scrollY > 0)
})
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolling', window.scrollY > 100)
})