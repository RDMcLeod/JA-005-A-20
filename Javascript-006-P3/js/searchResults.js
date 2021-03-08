export const buildSearchResults = (resultArray) => {
  resultArray.forEach((result) => {
    const resultItem = creatResultItem(result);
    const resultContents = document.createElement("div");
    resultContents.classList.add("resultContents");
    if (result.img) {
      const resultImage = createResultImage(result);
      resultContents.append(resultImage);
    }
    const resultText = createResultText(result);
    resultContents.append(resultText);
    resultItem.append(resultContents);
    const searchResults = document.getElementById("searchResults");
    searchResults.append(resultItem);
  });
};
const createResultItem = (result) => {
  const resultItem = document.createElement("div");
  resultItem.classList.add("resultItem");
  const resultTitle = document.createElement("div");
  resultTitle.classList.add("resultTitle");
  const link = document.createElement("a");
};
