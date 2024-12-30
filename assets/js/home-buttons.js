const btnHomeLogo = document.getElementById('btnHome')
btnHomeLogo.addEventListener('click', () => {
    window.scrollTo({
        "top": 0,
        "behavior": "smooth"
    })
})

const floatBtnHome = document.getElementById('float-btn-home')
window.addEventListener('scroll', () => {
    floatBtnHome.classList.toggle('scrolling', window.scrollY > 300)
})
floatBtnHome.addEventListener('click', () => {
    window.scrollTo({
        "top": 0,
        "behavior": "smooth"
    })
})