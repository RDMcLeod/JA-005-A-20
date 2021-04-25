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
  updateWeatherLocationHeader(headerMsg);
  updateScreenReaderConfirmation(srMsg);
};
export const displayApiError = (statusCode) => {
  const properMsg = toProperCase(statusCode.message);
  updateWeatherLocationHeader(properMsg);
  updateScreenReaderConfirmation(`${properMsg}. Please Try Again.`);
};

const updateWeatherLocationHeader = (mesage) => {
  const h1 = document.getElementById("currentForecast__location");
  h1.textContent = message;
};
const toProperCase = (text) => {
  const words = text.split("");
  const properWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return properWords.join("");
};

export const updateScreenReaderConfirmation = (massage) => {
  document.getElementById("confirmation").textContent = message;
};
