const linkCategory = document.querySelector("#linkCategory");

let linkCategories = [];

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