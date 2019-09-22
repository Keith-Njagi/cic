const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: true,
  live: true,
  visibility: 'hidden'
})
// Initiate the wowjs animation library
// new WOW().init()
wow.init()

// Manual Slideshow
let manualSlideIndex = 1
showDivs(manualSlideIndex)

function plusDivs (n) {
  showDivs(manualSlideIndex += n)
}

function showDivs (n) {
  let i
  const x = document.getElementsByClassName('myslides')

  if (n > x.length) { manualSlideIndex = 1 }
  if (n < 1) { manualSlideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  x[manualSlideIndex - 1].style.display = 'block'
}

// Automatic Slideshow
let slideIndex = 0
carousel()

function carousel () {
  let i
  const x = document.getElementsByClassName('myslides')
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  slideIndex++
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex - 1].style.display = 'block'
  setTimeout(carousel, 8000) // Change image every 5 seconds
}

// Open mobile navigation
function openNav () {
  document.getElementById('myNavMenu').style.display = 'block'
}

// Close mobile navigation
function closeNav () {
  document.getElementById('myNavMenu').style.display = 'none'
}

// Scroll button
window.onscroll = function () { scrollFunction() }
// Show scroll button once window is scrolled
function scrollFunction () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('scroll01').style.display = 'block'
    // document.getElementByclass('site-scroll-button').style.display = 'block'
  } else {
    document.getElementById('scroll01').style.display = 'none'
    // document.getElementByclass('site-scroll-button').style.display = 'none'
  }
}
// The scroll function on click
function topFunction () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

