
const createMenuPage = () => {
    const content = document.querySelector("body > div");
    const menuContent = document.createElement("div");
    menuContent.classList.add("page-content");

    // We add a temporal test text
    const fakeText = document.createElement("p");
    fakeText.textContent = "This is a menu page";
    menuContent.appendChild(fakeText);

    // We add it
    content.appendChild(menuContent);
}

export default createMenuPage;