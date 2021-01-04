const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("addBtn");
const cancelButton = document.querySelector("#cancelButton");
const adddLinkPanel = document.querySelector("addLinkPanel");


let linkCategories = [];
let links =[];

addBtn.addEventListener('click', (event) => {
console.log('add btn clicked');
showFormPanel();

});

cancelButton.addEventListener('click', (event) => {
event.preventDefault();
console.log('Cancel button clicked');

hideFormPanel();

});

console.log(addLinkPanel.classList);

function showFormPanel(){
  addLinkPanel.classList.remove('hidden');
}
function hideFormPanel (){
addLinkPanel.classList.add('hidden');
}


linkCategory.addEventListener("keydown", function (event) {
  
  
  if (event.keycode === 188) {
      event.preventDefault();
    
      linkCategories.push(linkCategory.value);

      linkCategory.value='';

    //Display the updated catagories
      displayLinkCategories(); 
    
  }
})
function displayLinkCategories() {
  console.log("display Link Categories");
  
}

console.log(this);

submitButton.addEventListener('click', (event) =>{

//stop form from submitting
   event.preventDefault(); 


  const title = linkTitle.value; 
  const url = linkUrl.value; 
  const categories = linkCategories;
  
  
  const newLink = {
   title,
   url,
   categories

  } 
    // push new link to array
    links.push(newLink);

    linkTitle.value='';
    linkUrl.value='';
    linkCategory.value='';
    linkCategories=[];

    displayLinkCategories();
   
    // hide the addLinkPanel form
    hideFormPanel();

});