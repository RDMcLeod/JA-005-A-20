export const setSearchFocus = () => {
  document.getElementById("search").focus();
};

export const showClearTextButton = ()=> {
  const search =document.getElementById("search");
  const clear= document,getElementById("clear");
  if (search.nodeValue.length) {
    clear.classlist.remove("none")
    clear.classlist.add("flex");
  } else {
    clear.classlist.add("none");
    clear.classlist.remove("flex");
  }
};
