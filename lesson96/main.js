const cakeButton = document.querySelector('.school__img-img')
const cakeWind = document.querySelector('.school__cakes')
const cakeCan = document.querySelector('.school__cakes-cancel')
const body = document.querySelector('body')


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
    console.log(window.scrollY)
})

setInterval(() => {
    if (window.scrollY >= 10) {
        body.classList.add('burger--down')
    } else if (window.scrollY < 10) {
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










