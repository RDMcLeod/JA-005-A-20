import { setSearchFocus } from "./searchBar.js";
import { buildSearchResults } from "./searchResults.js";
import { getSearchTerm } from "./dataFunctions.js";

document.addEventListener("readyStateChange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});
const initApp = () => {
  setSearchFocus();

  // TODO: 3 listeners clear text
  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};
// Procedural workflow function
const submitTheSearch = (event) => {
  event.preventDefault();

  //TODO: delete seacrh results
  //Process the search
  processTheSearch();
  setSearchFocus();
};
//Procedural
const processTheSearch = async () => {
  //TODO:clear the stats line
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retieveSearchResults(searchTerm);
  if (resultArray.length) buildSearchResults(resultArray);
  //TODO:set stats line
};
