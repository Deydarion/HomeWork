const body = document.querySelector('body')
const navUl = document.querySelector('.header__iner') 
const burger = document.querySelector('.burger')



function burgerToggle() {
    navUl.classList.toggle('header__iner--open')
    body.classList.toggle('burger--opened')
}

burger.addEventListener('click', event => {
    burgerToggle()
    nav.forEach(e => {
        e.addEventListener('click', el => {
            body.classList.remove('burger--opened')
            navUl.classList.remove('header__iner--open')
        } )
    })  
})

setInterval(() => {
    if (window.scrollY >= 10 && navUl.classList.contains('header__iner--open') == false) {
        body.classList.add('burger--down')
        
    } else if (window.scrollY < 10 || navUl.classList.contains('header__iner--open') == true) {
        body.classList.remove('burger--down')
        
    }

}, 0)