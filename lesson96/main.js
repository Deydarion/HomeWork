const cakeButton = document.querySelector('.school__img-img')
const cakeWind = document.querySelector('.school__cakes')
const cakeCan = document.querySelector('.school__cakes-cancel')
const body = document.querySelector('body')
const nav = document.querySelectorAll('.nav__li') 

function cakeToggle() {
    cakeWind.classList.toggle('visible--status')   
    body.classList.toggle('cakes--open') 
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



function burgerToggle() {
    navUl.classList.toggle('nav__ul--open')
    body.classList.toggle('burger--opened')
}

burger.addEventListener('click', event => {
    burgerToggle()
    nav.forEach(e => {
        e.addEventListener('click', el => {
            body.classList.remove('burger--opened')
            navUl.classList.remove('nav__ul--open')
        } )
    })  
})

setInterval(() => {
    if (window.scrollY >= 10 && navUl.classList.contains('nav__ul--open') == false) {
        body.classList.add('burger--down')
        
    } else if (window.scrollY < 10 || navUl.classList.contains('nav__ul--open') == true) {
        body.classList.remove('burger--down')
        
    }

}, 0)

// `````````````````````` tab `````````````````````

const tabControls = document.querySelector('.tutor__tab-ul')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {
    const tabControl = e.target.closest('.tutor__tab-link')
    
    
    if (!tabControl) return 
    e.preventDefault()
    if (tabControl.classList.contains('tutor__tab-link--active') ) return
    
    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const tabBlock = document.querySelector('.tutor__block--active') 
    const tabLink = document.querySelector('.tutor__tab-link--active')
    
    tabBlock.classList.remove('tutor__block--active')
    tabLink.classList.remove('tutor__tab-link--active')
    
    tabContent.classList.add('tutor__block--active')
    tabControl.classList.add('tutor__tab-link--active')
    

}

// ````````````````accoridon ````````````````

const accordionLists = document.querySelectorAll('.tutor__block')
const accordionC = document.querySelectorAll('.tutor__accoridon')

accordionLists.forEach(el => {

    el.addEventListener('click', e => {

        accordionC.forEach(el => {
            el.style.maxHeight = null
            el.style.marginTop = null
        })
        
        const accordionControl = e.target.closest('.tutor__block-button')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling
        
        

        accordionLists.forEach(el => {
            if(el.classList.contains('tutor__accordion--active') == true && el != accordionItem) {
                el.classList.remove('tutor__accordion--active')
            } 
        })
    

        accordionItem.classList.toggle('tutor__accordion--active')

        if (accordionItem.classList.contains('tutor__accordion--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            accordionContent.style.marginTop = 20 + 'px'

        } else {
            accordionContent.style.maxHeight = null
            accordionContent.style.marginTop = null
        }
    })

    
});


// ````````````````` swiper `````````````````


const swiper = new Swiper('.photo__swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 32,
   
    slidesPerView: 1,
    
    freeMode: true,
    // If we need pagination
    pagination: {
        el: '.photo__p-bar',
        type: 'fraction',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.photo__p-next',
        prevEl: '.photo__p-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1071: {
          slidesPerView: 4,
          
        },
        554: {
            slidesPerView: 3,
        },
        323: {
            slidesPerView: 2,
        }
      }

    

});

const tSwiper = new Swiper('.tether__sliders', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    
    centeredSlides: true,
    // Navigation arrows
    navigation: {
        nextEl: '.tether__next',
        prevEl: '.tether__prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        // when window width is >= 320px
        1881: {
          slidesPerView: 3,
      }, 
      1659: {
        slidesPerView: 2.7,
      },
      1278: {
        slidesPerView: 2.1,
      },
      987: {
        slidesPerView: 1.7,
      }
    }
});

    const telInput = document.querySelectorAll('input[type="telephone"]')

    const mi = new Inputmask('+7 (999) 999 99-99')
    mi.mask(telInput)





