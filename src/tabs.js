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
    home.setAttribute("id", "homeb")
    
    menu.classList.add("tab");
    menu.setAttribute("id", "menub")
    
    contact.classList.add("tab");
    contact.setAttribute("id", "contactb")

    //We set the text
    home.textContent = "HOME";
    menu.textContent = "MENU";
    contact.textContent = "CONTACT";

    //We add them
    const menubar = document.createElement("div");
    menubar.classList.add("navbar");

    menubar.appendChild(home);
    menubar.appendChild(menu);
    menubar.appendChild(contact);

    content.appendChild(menubar);

    //We make them clickable
    home.addEventListener("click", () => {
        createRestaurantHomepage();
        clearPage();
        home.setAttribute("class", "used");
        menu.setAttribute("class", "tab");
        contact.setAttribute("class", "tab");
    })
    
    menu.addEventListener("click", () => {
        createMenuPage();
        clearPage();
        home.setAttribute("class", "tab");
        menu.setAttribute("class", "used");
        contact.setAttribute("class", "tab");
    })
    
    contact.addEventListener("click", () => {
        createContactPage();
        clearPage();
        home.setAttribute("class", "tab");
        menu.setAttribute("class", "tab");
        contact.setAttribute("class", "used");
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