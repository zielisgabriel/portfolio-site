const btnHomeLogo = document.getElementById('btnHome')
btnHomeLogo.addEventListener('click', () => {
    window.scrollTo({
        "top": 0,
        "behavior": "smooth"
    })
})