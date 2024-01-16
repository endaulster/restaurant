
const createContactPage = () => {
    const content = document.querySelector("body > div");
    const contactContent = document.createElement("div");
    contactContent.classList.add("page-content");
    
    // We add a temporal test text
    const fakeText = document.createElement("p");
    fakeText.textContent = "This is a contact page";
    contactContent.appendChild(fakeText);

    // We add it
    content.appendChild(contactContent);
}

export default createContactPage;