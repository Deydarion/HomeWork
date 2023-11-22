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


// ```````````````````````` swiper 

const OfferSwiper = new Swiper('.offer__slider', {
    // Optional parameters
    direction: 'horizontal',
    initialSlide: 3,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
    },
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        // when window width is >= 320px
        1584: {
            slidesPerView: 4.5,
            
        },
        1427: {
            slidesPerView: 4.2,
            
        },
        1050: {
            slidesPerView: 3,
        },
        853: {
            slidesPerView: 2.5,
        },
        777: {
            slidesPerView: 2.2,
        }
       
      }

});


const CompSwiper = new Swiper('.comp__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    loop: true,
    centeredSlides: false,

    navigation: {
        nextEl: '.comp__next',
        prevEl: '.comp__prev',
    },

    breakpoints: {
        // when window width is >= 320px
        899: {
            slidesPerView: 6,
        },
        505: {
            slidesPerView: 4,
            centeredSlides: true,
        }
    }
    


});