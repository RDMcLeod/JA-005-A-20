export const setPlaceHolderText = () => {
  const input = document.getElementById("searchBar__text");
  window.innerWidth < 400
    ? (input.placeHolder = "City, State, Country")
    : (input.placeHolder = "City, State, Country or Zip Code");
};

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

export const updateDisplay = (weatherJson, locationObj) => {
  fadeDisplay();
  clearDisplay();
  const weatherClass = getWeatherClass(weatherJson.current.weather[0].icon);
  setBGImage(weatherClass);
  const screenReaderWeather = buildScreenReaderWeather(
    weatherJson,
    locationObj
  );
  updateScreenReaderConfirmation(screenReaderWeather);
  updateWeatherLocationHeader(locationObj.getName());
  //current conditions
  const ccArray = createCurrentConditionsDivs(
    weatherJson,
    locationObj.getUnit()
  );
  //six day forecast
  setFocusOnSearch();
  fadeDisplay();
};

const fadeDisplay = () => {
  const cc = document.getElementById("currentForecast");
  cc.classList.toggle("zero-vis");
  cc.classList.toggle("fade-in");
  const sixDay = document.getElementById("dailyForecast");
  sixDay.classList.toggle("zero-vis");
  sixDay.classList.toggle("fade-in");
};

const clearDisplay = () => {
  const currentConditions = document.getElementById(
    "currentForecast__conditions"
  );
  deleteContents(currentConditions);
  const sixDayForecast = document.getElementById("dailyForecast__contents");
  deleteContents(sixDayForecast);
};
const deleteContents = (parentElement) => {
  let child = parentElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};
const getWeatherClass = (icon) => {
  const firstTwoChars = icon.slice(0, 2);
  const lastChar = icon.slice(2);
  const weatherLookup = {
    "09": "snow",
    10: "rain",
    11: "rain",
    13: "snow",
    50: "fog",
  };
  let weatherClass;
  if (weatherLookup[firstTwoChars]) {
    weatherClass = weatherLookup[firstTwoChars];
  } else if (lastChar === "d") {
    weatherClass = "clouds";
  } else {
    weatherClass = "night";
  }
  return weatherClass;
};
const setBGImage = (weatherClass) => {
  document.documentElement.classList.add(weatherClass);
  document.documentElement.classList.forEach((img) => {
    if (img !== weatherClass) document.documentElement.classList.remove(img);
  });
};
const buildScreenReaderWeather = (weatherJson, locationObj) => {
  const location = locationObj.getName();
  const unit = locationObj.getUnit();
  const tempUnit = unit === "imperial" ? "F" : "C";
  return `${weatherJson.current.weather[0].description} and ${Math.round(
    Number(weatherJson.current.temp)
  )}°${tempUnit}in ${location}`;
};
const setFocusOnSearch = () => {
  document.getElementById("searchBar__text").focus();
};
const createCurrentConditionsDivs = (weatherObj, unit) => {
  const tempUnit = unit === "imperial" ? "F" : "C";
  const windUnit = unit === "imperial" ? "mph" : "m/s";
  const icon = createMainImgDiv(
    weatherObj.current.weather[0].icon,
    weatherObj.current.weather[0].description
  );
  const temp = createElem(
    "div",
    "temp",
    `${Math.round(number(weatherObj.current.temp))}°`
  );
  const properDesc = toProperCase(weatherObj.current.weather[0].description);
  const desc = createElem("div", "desc", properDesc);
  const feels = createElem(
    "div",
    "feels",
    `Feels Like ${Math.round(number(weatherObj.current.feels_like))}°`
  );
  const maxTemp = createElem(
    "div",
    "maxtemp",
    `High ${Math.round(number(weatherObj.daily[0].temp.max))}°`
  );

  const humidity = createElem(
    "div",
    "humidity",
    `Humidity ${(weatherObj.current, humidity)}%`
  );
  const wind = createElem(
    "div",
    "wind",
    `Wind ${Math.round(number(weatherObj.current.wind_speed))} ${windUnit}`
  );
};

const createMainImgDiv = (icon, altText) => {
  const iconDiv = createElem("div", "icon");
  iconDiv.id = "icon";
  const faIcon = translateIconToFontAwesome(icon);
  faIcon.ariaHidden = true;
  faIcon.title = altText;
  iconDiv.appendChild(faIcon);
  return iconDiv;
};
const createElem = (elemType, divClassName, divText, unit) => {
  const div = document.createElement(elemType);
  div.className = divClassName;
  if (divText) {
    div.textContent = divText;
  }
  if (divClassName === "temp") {
    const initDiv = document.createElement("div");
    unitDiv.classList.add("unit");
    unitDiv.textContent = unit;
    div.appendChild(unitDiv);
  }
  return div;
};
