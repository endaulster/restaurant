import createContactPage from "./contactpage";
import createMenuPage from "./menupage";
import createRestaurantHomepage from "./homepage";

const createPageChanger = () => {
    const content = document.querySelector("body > div");
    // Buttons
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const contact = document.createElement("div");

    // We give them classes
    home.classList.add("tab");
    menu.classList.add("tab");
    contact.classList.add("tab");

    //We set the text
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    //We add them
    content.appendChild(home);
    content.appendChild(menu);
    content.appendChild(contact);

    //We make them clickable
    home.addEventListener("click", () => {
        createRestaurantHomepage();
        clearPage();
    })
    
    menu.addEventListener("click", () => {
        createMenuPage();
        clearPage();
    })
    
    contact.addEventListener("click", () => {
        createContactPage();
        clearPage();
    })
}

function clearPage(){
    const content = document.querySelector("body > div");
    const pageContent = document.querySelector("body > div > div.page-content")
    if (pageContent){
        content.removeChild(pageContent);
    }
}

export default createPageChanger;