const menuBtn = document.getElementById('menuBtn')
const navLinks = document.getElementById('navLinks')
const menuBtnIcon = menuBtn.querySelector('i')

window.sr = new ScrollReveal()

const ScrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
}

menuBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle('open')

  const isOpen = navLinks.classList.contains('open')
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')

  navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove('open')
    menuBtnIcon.setAttribute('class', 'ri-menu-line')
  })
})

//: Header 
sr.reveal('.header_image img', {
  ...ScrollRevealOption,
  origin: 'right',
})
sr.reveal('.header_presentation h3', {
  ...ScrollRevealOption,
  delay: 400,
})
sr.reveal('h1', {
  ...ScrollRevealOption,
  delay: 700,
})
sr.reveal('.header_presentation p', {
  ...ScrollRevealOption,
  delay: 900,
})
sr.reveal('.header_btns', {
  ...ScrollRevealOption,
  delay: 1100,
})
//: Service 
sr.reveal('.service_card', {
  ...ScrollRevealOption,
  interval: 300,
})
//: Destination 
sr.reveal('.destination_card', {
  ...ScrollRevealOption,
  interval: 300,
})