window.addEventListener("scroll", function(){
    var header = document.querySelector("#header")
    header.classList.toggle('rolagemDefault', window.scrollY < 20)
    header.classList.toggle('rolagem', window.scrollY > 20)
    header.classList.toggle('rolagem1', window.scrollY > 600)
})

btnMobile = document.querySelector("#btn_mobile")
btnMobile.onclick = function() {
    navbarMobile = document.querySelector('.list-mobile')
    navbarMobile.classList.toggle("active")
}

saibaMais = document.querySelector("#saiba_maisCheck")
saibaMais.onclick = function() {
    saibaMaisDescription = document.querySelector("#card_description")
    saibaMaisDescription.classList.toggle("active")
}