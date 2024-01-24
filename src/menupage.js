//Lets define stuuf
const content = document.querySelector("body > div");
const menuContent = document.createElement("div");
menuContent.classList.add("page-content");

//Lets define picture sources

const pictureNumber = [
  "recipes/carbonara.jpg",
  "recipes/alfredo.jpg",
  "recipes/bolognese.jpg"
];

// We create the system to make recipes and make them easy to change/reeplace
const menuRecipes = [];

function recipe(a, b) {
  this.title = a,
  this.description = b
}

function addRecipe(a, b) {
  menuRecipes.push(new recipe(a, b));
}

function createCard()
{
  let AllCards = Array.from(document.querySelectorAll(".card"));
  AllCards.forEach( chil => chil.remove());

  for (let i = 0; i < menuRecipes.length; i++)
    {
        let newCard = document.createElement("div");
        menuContent.appendChild(newCard).className="card";
        newCard.setAttribute("id", i);
        // We add the rest

        // We add pictures

        let recipePicture = document.createElement("img");
        recipePicture.src = pictureNumber[i];
        recipePicture.width = "200";
        recipePicture.height = "133";
        newCard.appendChild(recipePicture).className = "recipePicture";

        //We create a recipe div
        let DivSabro = document.createElement("div");
        DivSabro.setAttribute("class", "recipeSabro");

        // We add the recipe Name
        let recipeTitle = document.createElement("h2");
        recipeTitle.textContent = menuRecipes[i].title;
        DivSabro.appendChild(recipeTitle).className="recipeTitle";

        // We add the description name
        let recipeDes = document.createElement("p");
        recipeDes.textContent = menuRecipes[i].description;;
        DivSabro.appendChild(recipeDes).className="recipeDes";

        //We add it to the whole thing
        newCard.appendChild(DivSabro);
  }
}

//We add our recipes here

addRecipe("Pasta Carbonara", "pasta made with eggyolk and pancetta, the best in rome", "$5");
addRecipe("Pasta Alfredo", "pasta made with butter and cheese, very tasty and classic", "$5");
addRecipe("Pasta Bolognesa", "pasta made with meat ragu made from pork and cow", "$5");

const createMenuPage = () => {

    // We add it
    content.appendChild(menuContent);

    // We make the recipes appear
    createCard();

    // We add grid
    Object.assign(menuContent.style, {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: "0",
      alignItems: "flex-start"
    });

    //We clean the background
    Object.assign(content.style, {
        backgroundColor: "#ae5e2b12",
        backgroundImage: "",
        backgroundSize: "",
        backgroundRepeat: "",
        backgroundPosition: "",
        backgroundAttachment: ""
      });
}

export default createMenuPage;