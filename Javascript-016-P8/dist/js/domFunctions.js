export const addSpinner = (element) => {
  animateButton(element);
  setTimeout(animateButton, 1000, element);
};
const animateButton = (element) => {
  element.classList.toggle("none");
  element.nextElementSibling.classList.toggle("block");
  element.nextElementSibling.classList.toggle("none");
};
export const displayError = (headerMsg, srMsg) => {
  updateWeatherLoactionHeader(headerMsg);
  updateScreenReaderConfirmation(srMsg);
};

const updateWeatherLoactionHeader = (mesage) => {
  const h1 = document.getElementById("currentForecast__location");
  h1.textContent = message;
};

export const updateScreenReaderConfirmation = (massage) => {
  document.getElementById("confirmation").textContent = message;
};
