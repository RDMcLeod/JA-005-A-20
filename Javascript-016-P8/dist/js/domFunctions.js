export const addSpinner = (element) => {
  animateButton(element);
  setTimeout(animateButton, 1000, element);
};
