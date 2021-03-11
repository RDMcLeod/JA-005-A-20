import { setSearchFocus, showClearTextButton } from "./searchBar.js";
import {
  deleteSearchResults,
  buildSearchResults,
  clearStatsLine,
  setStatsLine,
} from "./searchResults.js";
import { getSearchTerm } from "./dataFunctions.js";

document.addEventListener("readyStateChange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});
const initApp = () => {
  setSearchFocus();
  // TODO: 2 listeners clear text

  const search = document.getElementById("search");
  search.addEventListener("input, showClearTextButton ");

  const form = document.getElementById("searchBar");
  form.addEventListener("submit", submitTheSearch);
};
// Procedural workflow function
const submitTheSearch = (event) => {
  event.preventDefault();

  deleteSearchResults();
  //Process the search
  processTheSearch();
  setSearchFocus();
};
//Procedural
const processTheSearch = async () => {
  clearStatsLine();
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retieveSearchResults(searchTerm);
  if (resultArray.length) buildSearchResults(resultArray);
  setStatsLine(resultArray.length);
};
