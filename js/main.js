const header = document.querySelector('header')
const navBtn = document.querySelector('.nav-btn')
const navList = document.querySelector('.nav-list')
const navbar = document.querySelector('nav')
const cycle = document.querySelector('#cycle')
const main = document.querySelector('#main')
const textSection = document.querySelector('.text')

const aboutSection = document.querySelector('#about')
const aboutAdd = document.querySelector('.aboutAdd')
const aboutRem = document.querySelector('.aboutRem')

const tiltCards = document.querySelectorAll('.tilt-card')

const donateBtn = document.querySelector('#donate-btn')
const donateLight = document.querySelector('#donate-light')

const gtt = document.querySelector('.top')

// Nav btn
navBtn.addEventListener('click', () => {
    navList.classList.toggle('nav-show')
    navBtn.classList.toggle('hide')
})

// Mission card tilt
VanillaTilt.init(document.querySelectorAll('.tilt-card'), {
    max: 15,
    speed: 400
})

// Paralax hero section
let offsetLeft = null
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    if(scroll > header.clientHeight-5) {
        navbar.style.position = 'fixed'
        navbar.style.background = 'rgba(255, 255, 255, .5)'
        gtt.style.display = 'flex'
    } else {
        navbar.style.position = 'absolute'
        navbar.style.background = 'transparent'
        gtt.style.display = 'none'
    }

    if(scroll < 200) {
        textSection.style.top = scroll/2 + 'px'
    }
    
    if(!offsetLeft) {
        offsetLeft = String(cycle.offsetLeft)
    }

    cycle.style.left =  offsetLeft - scroll + 'px'
})

// About section image chenge
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
        if(ent.isIntersecting) {
            aboutAdd.classList.toggle('aboutImgAddAnim')
            aboutRem.classList.toggle('aboutImgRemAnim')

            aboutObserver.unobserve(ent.target)
        }
    })
}, {
    threshold: 0.2
})
aboutObserver.observe(aboutSection)

// Review [swiper]
let items = null

function swp() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: items,
        pagination: {
            el: '.swiper-pagination',
        }
    });
}

window.addEventListener('load', () => {
    if(window.innerWidth < 700) {
        items = 1;
        swp();
    } else if (window.innerWidth < 1000) {
        items = 2;
        swp();
    } else {
        items = 3;
        swp();
    }
})




// Scroll reveal
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
});

sr.reveal('.hero-text', {delay: 200, origin: 'top', })

sr.reveal('#aboutText', {delay: 0, origin: 'right', })
sr.reveal('.about-img', {delay: 0, origin: 'left', })

sr.reveal('.sec-title', {delay: 0, origin: 'top', })
sr.reveal('.left-card', {delay: 0, origin: 'left', })
sr.reveal('.center-card', {delay: 0, origin: 'top', })
sr.reveal('.right-card', {delay: 0, origin: 'right', })

sr.reveal('.gel-title', {delay: 0, origin: 'left', })
sr.reveal('.pictures', {delay: 0, origin: 'right', })

sr.reveal('.reviews', {delay: 0, origin: 'bottom', })

sr.reveal('#donate-light', {delay: 0, origin: 'left', })
sr.reveal('.donate-text', {delay: 0, origin: 'right', })

sr.reveal('.contact-text', {delay: 0, origin: 'left', })
sr.reveal('.contact-img', {delay: 0, origin: 'right', })


// Donate section light control
donateBtn.addEventListener('mouseover', () => {
    donateLight.classList.toggle('img-hover')
})
donateBtn.addEventListener('mouseout', () => {
    donateLight.classList.toggle('img-hover')
})