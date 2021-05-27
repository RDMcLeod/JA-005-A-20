import { namesOne, namesTwo } from "./names.js";

const initApp = () => {
  document.getElementById("submitForm").addEventListener("submit", (event) => {
    event.preventDefault();
    // clear out suggestions
    // generate names
    // display names
  });
};

document.addEventListener("DOMContentLoaded", initApp);
