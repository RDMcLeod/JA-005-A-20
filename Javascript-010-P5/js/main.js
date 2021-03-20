import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js";

const toDoList = new ToDoList();

//Launch app
document.addEventListener("readystatechange", (event) => {
  if (event.target.readystate === "complete") {
    initApp();
  }
});

const initApp = () => {
  //Add listeners

  // procedural
  //Load list object
  //refresh the page
  refreshThePage();
};
const refreshThePage = () => {
  clearListPage();
  //renderList
  //clearItemEntryField();
  //setFocusOnItemEntryField();
};
const clearListDisplay = () => {
  const parenElement = document.getElementById("listItem");
  deleteContents(parenElement);
};

const deleteContents = (parenElement) => {
  let child = parenElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
  }
};
