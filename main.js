//abre e fecha o menu quando clicar nos ícones
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
//quando clicar em algum item no menu, esconder o menu
const links = document.querySelectorAll('#header ul li a')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') // a função toggle vai fazer com que se existir a classe 'show' vai tirar, se não existir vai colocar
  })
}

//ao clicar em algum link do menu vai remover a classe show
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// ao fazer a rolagem vai causar uma sombra no header
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  // quando rolar vai aparecer uma sombra no header

  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

window.addEventListener('scroll', function () {})

// TESTIMONIALS CAROUSEL SLIDER SWIPER
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLL REVEAL : MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PÁGINA
const scrolReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrolReveal.reveal(
  `#home .text, #home .image,
  #about .text, #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// ao fazer a rolagem vai aparecer o botão para voltar para o topo
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 1500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// MENU CONFORME A SEÇÃO VÍSIVEL NA PÁGINA
const sections = document.querySelectorAll('main section[id]') //dentro do main procure todas as sections que conter ID, o query selector vai pegar
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// when scroll
window.addEventListener('scroll', function () {
  backToTop()
  changeHeaderWhenScroll()
  activateMenuAtCurrentSection()
})
