
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

    //We clean the background
    Object.assign(content.style, {
        backgroundColor: "rgb(130 115 97)",
        backgroundImage: "",
        backgroundSize: "",
        backgroundRepeat: "",
        backgroundPosition: "",
        backgroundAttachment: ""
      });
}

export default createMenuPage;