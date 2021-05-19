const slider = document.querySelector(".slider-container"),
  slides = Array.from(document.querySelectorAll(".slide"));

let isDragging = false,
  startPos = 0,
  curentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0;

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector("img");
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());

  // Touch Events
  slide.addEventListener("touchStart", touchStart(index));
  slide.addEventListener("touchend", touchEnd);
  slide.addEventListener("touchmove", touchEnd);

  // Mouse Events
  slide.addEventListener("mousedown", touchStart(index));
  slide.addEventListener("mouseup", touchEnd);
  slide.addEventListener("mouseleave", touchEnd);
  slide.addEventListener("mousemove", touchMove);
});
// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation);
  };
}

function touchEnd() {
  isDragging = false;
}
function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPosition(event);
  }
}
function getPositionX(event) {
  return event.type.include("mouse") ? event.pageX : event.touches[0].clientX;
}
function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}
function setSliderPosition() {
  slider.getElementsByClassName.transform = `translateX(${currentTranslate}px)`;
}
