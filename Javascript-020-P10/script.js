const slider = document.querySelector(".slider-container"),
  slides = Array.from(document.querySelectorAll(".slide"));

let isDraging = false,
  startPos = 0,
  curentTranslate = 0,
  prevTranslate = 0,
  animatationID = 0,
  currentIndex = 0,

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.
  preventDefault())

// Touch Events
slide.addEventListener('touchStart', touchStart(index))
slide.addEventListener('touchend', touchStart(index))
// Mouse Events
slide.addEventListener('mousedown', touchStart(index))

  })