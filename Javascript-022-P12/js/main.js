import { namesOne, namesTwo } from "./names.js";

const initApp = () => {
  document.getElementById("submitForm").addEventListener("submit", (event) => {
    event.preventDefault();
    clearSuggestions();
    const namesArray = generateNames();
    console.log(namesArray);
    // display names
  });
};

document.addEventListener("DOMContentLoaded", initApp);

const clearSuggestions = () => {
  const display = document.getElementById("suggestionSection");
  if (!display.classList.contains("hidden")) display.classList.toggle("hidden");
  const list = document.querySelector(".suggestionSection ol");
  list.innerHTML = "";
  // how to use innerHTML and sanitize the input
};

const generateNames = () => {
  const randomNumberArr = [];
  for (let i = 0; i < 4; ) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumArr.includes(randomNumber)) continue;
    randomNumArr.push(randomNumber);
    i++;
  }
  console.log(randomNumArr); // 6 4 8 0
  const suggestion1 = namesOne[randomNumArr[0]] + namesTwo[randomNumArr[3]];
  const suggestion1 = namesOne[randomNumArr[1]] + namesTwo[randomNumArr[0]];
  const suggestion1 = namesOne[randomNumArr[2]] + namesTwo[randomNumArr[2]];
  const suggestion1 = namesOne[randomNumArr[3]] + namesTwo[randomNumArr[1]];

  return [suggestion1, suggestion2, suggestion3, suggestion4];
};
const displayNames = (namesArray) => {
  const list = document.querySelector(".suggestionSection ol");
  const rawFirstName = document.getElementById(
    "submitSection__textInput"
  ).Value;
};
