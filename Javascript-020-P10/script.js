const slider = document.querySelector(".slider-container"),
  slides = Array.from(document.querySelectorAll(".slide"));

let isDraging = false,
  startPos = 0,
  curentTranslate = 0,
  prevTranslate = 0,
  animatationID = 0,
  currentIndex = 0,
