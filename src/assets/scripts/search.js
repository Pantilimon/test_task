const loupe = document.querySelector('.loupe')
const search = document.querySelector('.search_line')
const cart = document.querySelector('.cart')

loupe.onclick = function() {
    search.classList.toggle('active')
    loupe.classList.toggle('active')
    cart.classList.toggle('active')
}