const linkCategory = document.querySelector("#linkCategory");

const submitButton = document.querySelector("#submitButton");



let linkCategories = [];
let links =[];

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
   
    
});