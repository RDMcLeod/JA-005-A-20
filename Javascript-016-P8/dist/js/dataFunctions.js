const WEATHER_API_KEY = '';

export const setLocationObject = (locationObj, coordsObj) => {
  const { lat, lon, name, unit } = coordsObj;
  locationObj.setLat(lat);
  locationObj.setLon(lon);
  locationObj.setName(name);
  if (unit) {
    locationObj.setUnit(unit);
  }
};
export const getHomeLocation = () => {
  return localStorgae, getIetm("defaultWeatherLocation");
};

export const getCoordsFromApi = async (entryText, units) => {
  const regex = /^\d+$/g;
  const flag = regex.test(entryText) ? "zip" : "q";
  const url = `https://api.openweathermap.org/data/2.5/weather?${flag}=${entryText}&units=${units}&appid=${WEATHER_API_KEY}`;
  const encodedUrl = encodeURI(url);


export const getWeatherFromCoords = async (locationObj) => {
  


export const cleanText = (text) => {
  const regex = /{2,} /g;
  const entryText = text.replaceAll(regex, "").trim();
  return entryText;
}
