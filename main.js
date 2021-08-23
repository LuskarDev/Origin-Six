/* Abre e fecha o menu quando clicar no icone do hamburguer */

const nav = document.querySelector('#header nav')

const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){
    element.addEventListener('click', () => nav.classList.toggle('show'))
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links){
    link.addEventListener('click', () => nav.classList.remove('show'))
}

/* mudar o header da página quando der scroll */

const header = document.querySelector('#header')
const navHegiht = header.offsetHeight

function changeHeaderWhenScroll(){
window.addEventListener('scroll', function(){
    if(window.scrollY >= navHegiht){
        // scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        // menor que a altura do header
        header.classList.remove('scroll')
    }
})}

/* Testimonials slider */

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {  
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard:true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true,
        }
    }
})

/* sCROLLrEVEAL: mOSTRAR ELEMENTOS QUANDO DER SCROLL NA PÁGINA */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonial
    #contact .text, #contact .links`
    , { interval: 100}
    )

/* === button to top === */
const backToTopButton = document.querySelector('.back-to-top')
const navHegith = header.offsetHeight


function  backToTop(){
    if(window.scrollY >= navHegiht){
        // scroll é maior que a altura do header
        backToTopButton.classList.add('show')
    } else {
        // menor que a altura do header
        backToTopButton.classList.remove('show')
    }
}

/* Menu ativo conforme a seção visível da pagina */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection(){
    
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections ){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }

}

/* When Scroll */
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
  })



