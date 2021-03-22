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
  clearListDisplay();
  renderList();
  clearItemEntryField();
  setFocusOnItemEntryField();
};

const clearListDisplay = () => {
  const parenElement = document.getElementById("listItem");
  deleteContents(parenElement);
};

const deleteContents = (parenElement) => {
  let child = parenElement.lastElementChild;
  while (child) {
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
};

const renderList = () => {
  const list = toDoList.getList();
  list.forEach((item) => {
    buildListItem(item);
  });
};

const buildListItem = (item) => {
  const div = document.createElement("div");
  div.className = "item";
  const check = document.createElement("input");
  check.type = "checkbox";
  check.id = item.getId();
  check.tabIndex = 0;
  addClickListenerToCheckbox(check);
  const label = document.createElement("label");
  label.htmlFor = item.getId();
  label.textContent = item.getItem();
  div.appendChild(check);
  div.appendChild(label);
  const container = doument.getElementById("listItems");
  container.appendChild(div);
};

const addClickListenerToCheckbox = (checkbox) => {
  checkbox.addEventListener("click", (event) => {
    toDoList.removeItemFromList(checkbox.id);
    // TODO: remove from persistant data
    setTimeout(() => {
      refreshThePage();
    }, 1000);
  });
};
const clearItemEntryField = () => {
  document.getElementById("newItem").value = "";
};

setFocusOnItemEntry = () => {
  document.getElementById(newItem).focus();
};
