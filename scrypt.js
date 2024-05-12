const menuBtn = document.getElementById('menuBtn')
const navLinks = document.getElementById('navLinks')
const menuBtnIcon = menuBtn.querySelector('i')
// display section
const serviceGrid = document.querySelector('.service_grid')
const destinationGrid = document.querySelector('.destination_grid')
const tripList = document.querySelector('.trip_list')

window.sr = new ScrollReveal()

const ScrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
}

//** Toggle Nav  **/

menuBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle('open')

  const isOpen = navLinks.classList.contains('open')
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')

  navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove('open')
    menuBtnIcon.setAttribute('class', 'ri-menu-line')
  })
})

//** Display Section **/

const serviceArray = [
  {
    id: 1,
    title: 'calculator weather',
    desc: "Stay ahead of your travels with precise weather forecasts tailored to your destination's conditions.",
    img: 'assets/weather.png',
    alt: 'service of weather',
  },
  {
    id: 2,
    title: 'best flights',
    desc: "Stay ahead of your travels with precise weather forecasts tailored to your destination's conditions.",
    img: 'assets/plane.png',
    alt: 'service of plane',
  },
  {
    id: 3,
    title: 'local events',
    desc: "Stay ahead of your travels with precise weather forecasts tailored to your destination's conditions.",
    img: 'assets/event.png',
    alt: 'service of event',
  },
  {
    id: 4,
    title: 'customization',
    desc: "Stay ahead of your travels with precise weather forecasts tailored to your destination's conditions.",
    img: 'assets/customisation.png',
    alt: 'service of customisation',
  },
]

function displayService(service) {
  let displayserviceArray = service
    .map(function (item) {
      return `    
      <div id='${item.id}' class="service_card">
        <img src="${item.img}" alt="${item.alt}" />
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
`
    })
    .join('')
  serviceGrid.innerHTML = displayserviceArray
}
displayService(serviceArray)

const destinationArray = [
  {
    id: 4,
    title: 'Rome, Italy',
    price: '$5.42k',
    duration: '10 Days Trip',
    img: 'assets/destination-1.jpg',
  },
  {
    id: 5,
    title: 'London, UK',
    price: '$4.2k',
    duration: '12 Days Trip',
    img: 'assets/destination-2.jpg',
  },
  {
    id: 6,
    title: 'Full, Europe',
    price: '$15k',
    duration: '28 Days Trip',
    img: 'assets/destination-3.jpg',
  },
]
function displayDestination(destination) {
  let displaydestinationArray = destination
    .map(function (item) {
      return `
    <article id='${item.id}' class="destination_card">
          <img src="${item.img}" alt="${item.title}" />
          <div class="destination_details">
            <div>
              <h4>${item.title}</h4>
              <h5>${item.price}</h5>
            </div>
            <p>
              <span><i class="ri-navigation-fill"></i></span>
              ${item.duration}
            </p>
          </div>
        </article>
    `
    })
    .join('')
  destinationGrid.innerHTML = displaydestinationArray
}
displayDestination(destinationArray)

const tripArray = [
  {
    id: 7,
    icon: 'ri-signpost-line',
    title: 'choose destination',
    desc: 'Choose your dream destination from our curated selection of exotic locales, bustling cities and serene getaways.',
  },
  {
    id: 8,
    icon: 'ri-secure-payment-line',
    title: 'make payment',
    desc: 'Secure your adventure with ease through our streamlined payment process, ensuring a hassle-free booking experiences.',
  },
  {
    id: 9,
    icon: 'ri-flight-takeoff-line',
    title: 'reach airport on selected date',
    desc: 'Prepare for takeoff as you finalize your travel plans, arriving at the airport on your selected date ready to embark on your next unforgettable journey.',
  },
]

function displayTrip(trip) {
  let displayTripItem = trip
    .map(function (item) {
      return `
    <li id='${item.id}'>
      <div class="trip_li">
        <span><i class="${item.icon}"></i></span>
        <div className="trip_condition">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    </li>
    `
    })
    .join('')
  tripList.innerHTML = displayTripItem
}
displayTrip(tripArray)

//** Swipper JS  **/

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  autoHeight: true,
  SlidesPerView: 1,
})

//** ScrollReveal  **/

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
  delay: 1000,
})
sr.reveal('.header_btns', {
  ...ScrollRevealOption,
  delay: 1300,
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
//: Trip
sr.reveal('.trip_image img', {
  ...ScrollRevealOption,
  origin: 'right',
})
sr.reveal('.trip_content h3', {
  ...ScrollRevealOption,
  delay: 400,
})
sr.reveal('.trip_content h2', {
  ...ScrollRevealOption,
  delay: 700,
})
sr.reveal('.trip_list li', {
  ...ScrollRevealOption,
  delay: 1000,
  interval: 300,
})
//: Client
sr.reveal('#client h3', {
  ...ScrollRevealOption,
})
sr.reveal('#client h2', {
  ...ScrollRevealOption,
  delay: 300,
})
//: Client
sr.reveal('.footer_col', {
  ...ScrollRevealOption,
  interval: 300,
})
