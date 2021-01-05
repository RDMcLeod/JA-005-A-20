const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const adddLinkPanel = document.querySelector("#addLinkPanel");
const addedCategories = document.querySelector("#addedCategories");


let linkCategories = [];
let links =[
{
              title: 'New Link 1',
              url: 'url1.com',
              categories: ['node', 'angular']
},
{
              title: 'New Link 2',
              url: 'url2.com',
              categories: ['js', 'angular']
},
{
              title: 'New Link 3',
              url: 'url3.com',
              categories: ['node', 'bootstrap']
}

];

displayLinks();

addBtn.addEventListener('click', (event) => {
  console.log('add btn clicked');
  showFormPanel();

});

cancelButton.addEventListener('click', (event) => {
event.preventDefault();
console.log('Cancel button clicked');

hideFormPanel();

});

function showFormPanel(){
  addLinkPanel.classList.remove('hidden');
  
}
function hideFormPanel (){
addLinkPanel.classList.add('hidden');
clearLinkForm(); 
}


linkCategory.addEventListener('keydown', function (event) {
  
  
  if (event.keycode === 188) {
      event.preventDefault();
    
      linkCategories.push(linkCategory.value);

      linkCategory.value='';

    //Display the updated catagories
      displayLinkCategories(); 
    
  }
})
function displayLinkCategories() {
      console.log("Displaying Link Categories");
      addedCategories.innerHTML='';
      for (let category of LinkCategories){
          var categoryHTMLString = `<span class="category">${category}</span>`;
          addedCategories.innerHTML+= categoryHTMLString;
  }
  
}

function clearLinkForm(){
  linkTitle.value = '';
	linkUrl.value = '';
	linkCategory.value = '';
	linkCategories = [];
	addedCategories.innerHTML = '';
}


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
    links.unshift(newLink);

    clearLinkForm(); 

    displayLinkCategories();
   
    // hide the addLinkPanel form
    hideFormPanel();

    displayLinks();

});

function displaylinks(){
  linksList.innerHTML = '';

  for (let link of links){

    let linkHTMLString=`
     <div class="link panel">
				<div class="link-options">
					<button class="btn-sm">Delete</button>
					<button class="btn-sm">Edit</button>

				</div>
				<a href="${link.url}">
					<h1 class="header">${Link.title}</h1>
				</a>
				<p class="link-date">${Date.now()}</p>

				<div class="categories">
          Categories:`;
      for(let category of link.categories){
            linkHTMLString+=`<span class="category">${category}</span>`
      }

      linkHTMLString+= `
          	</div>
			  </div>
      `
      ;

      linksList.innerHTML +=  linkHTMLString;


  }

}