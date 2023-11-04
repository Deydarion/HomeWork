const cakeButton = document.querySelector('.school__img-img')
const cakeWind = document.querySelector('.school__cakes')
const cakeCan = document.querySelector('.school__cakes-cancel')



function cakeToggle() {
    cakeWind.classList.toggle('visible--status')    
}

document.addEventListener('click', (event) => {
    if(event.target === cakeWind) {
        cakeToggle()
    }
})

cakeButton.addEventListener('click' , () => {
    cakeToggle()
})

cakeCan.addEventListener('click' , () => {
    cakeToggle()
})

const navUl = document.querySelector('.nav__ul') 
const burger = document.querySelector('.burger')

const body = document.querySelector('body')

function burgerToggle() {
    navUl.classList.toggle('nav__ul--open')
    body.classList.toggle('burger--opened')
}

burger.addEventListener('click', event => {
    burgerToggle()
    console.log(window.scrollY)
})

setInterval(() => {
    if (window.scrollY >= 10) {
        body.classList.add('burger--down')
    } else if (window.scrollY < 10) {
        body.classList.remove('burger--down')
    }

}, 0)





