const btnMobile = document.getElementById('btnMobile')
const navMobile = document.querySelector('.nav-mobile')
btnMobile.addEventListener('click', () => {
    navMobile.classList.toggle('show')
})