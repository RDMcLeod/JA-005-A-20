import { setLocationObject, getHomeLocation } from "./dataFunctions.js";
import { addSpinner, displayError } from "./domFunctions.js";
import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurentLocation();

const initApp = () => {
  //add listeners
  const geoButton = document.getElementById("getLocation");
  geoButton.addEventListener("click, getGeoWeather");
  const homeButton = document.getElementById("home");
  homeButton.addEventListener("click, loadWeather");

  //setup
  //load weather
  loadWeather();
};
document.addEventListener("DOMContentLoaded", initApp);
const getGeoWeather = (event) => {
  if (event) {
    if (event.type === "click") {
      const mapIcon = document.querySelector(".fa-map-marker-alt");
      addSpinner(mapIcon);
    }
  }
  if (!navigator.geolocation) return geoError();
  navigator.geolocation.getCurrentPosition(geoSucess, geoError);
};
const geoError = (errObj) => {
  const errMsg = errObj.message ? errObj.message : "Geolocation not supported";
  displayError(errMsg, errMsg);
};
const geoSuccess = (position) => {
  const myCoordsObj = {
    lat: position.coords.latitude,
    lon: position.coords.longitude,
    name: `Lat:${position.coords.latitude} Long:${position.coords.longitide}`,
  };
  setLocationObject(currentLoc, myCoordsObj);
  updateDataAndDisplay(currentLoc);
};
const loadWeather = (event) => {
  const savedLocation = getHomeLocation();
  if (!savedLocation && !event) return getGeoWeather();
};

const updateDataAndDisplay = async (locationObj) => {
  //const weatherJson = await getWeatherFromCoords(locationObj);
  //if (weatherJson) updateDisplay(weatherJson, locationObj);
};
