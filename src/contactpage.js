
const createContactPage = () => {
    const content = document.querySelector("body > div");
    const contactContent = document.createElement("div");
    contactContent.classList.add("page-content");
    
    // We add a pretty picture
    const contactPicture = document.createElement("img");
    contactPicture.classList.add("contactPicture");
    contactPicture.src = "contact.jpg";
    contactPicture.width = "400";
    contactPicture.height = "250";

    contactContent.appendChild(contactPicture);
    
    // We create the introduction to the contact page
   
    const contactIntro = document.createElement("p");
    contactIntro.setAttribute("class", "contactP");
    contactIntro.setAttribute("id", "contactI");
    contactIntro.innerHTML = "Buon giorno! We'd love to hear from you! Whether you have questions about our delectable dishes, want to make a reservation for a cozy dinner, or simply wish to say ciao, our doors are always open. <br><br>Feel free to reach out via email. Grazie for considering Il Quotidiano - where authentic Italian flavors meet warm hospitality!"
    contactContent.appendChild(contactIntro);

    // We make the contact part
    const contactText = document.createElement("p");
    contactText.textContent = "You've got questions? "; 
    contactText.setAttribute("class", "contactP");
    contactText.setAttribute("id", "contactUS");
        // We want to create a custom mail subject and stuff
    const contactLink = document.createElement("a");

    let theMail = "g.antorrealba@gmail.com";
    let theSubject = "I%20am%20very%20excited%20to%20contact%20you";
    let mailContent = "Hello,%0A%0AI want to know everything about how you have made this website!";    
    let mailtoLink = `mailto:${theMail}?subject=${theSubject}&body=${mailContent}`;

    contactLink.href = mailtoLink;
    contactLink.textContent = "Contact us"; 
    contactLink.setAttribute("class", "contactP");

    // We join all of this together
    contactText.appendChild(contactLink);

    // We create a div to contain it all(Address)
    const contactDirection = document.createElement("div");
    contactDirection.setAttribute("class", "restAddress");

        //We create a SVG
    let contactSv = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    contactSv.setAttribute("width", "100");
    contactSv.setAttribute("height", "100");
        //We create an image with that SVG
    let contactIcon = document.createElementNS("http://www.w3.org/2000/svg", "image");
    contactIcon.setAttribute("width", "100%");
    contactIcon.setAttribute("height", "100%");
    contactIcon.setAttribute("href", "map.svg");    
    contactSv.appendChild(contactIcon); 
    // We join all of this together
    contactDirection.appendChild(contactSv);    
    
    const contactAddress = document.createElement("p");
    contactAddress.setAttribute("class", "contactP");
    contactAddress.innerHTML = "Av. Callao 1299, C.A.B.A. <br>Buenos Aires, Argentina.";
    
    contactDirection.appendChild(contactAddress);
   
    // Wrapper for address and contact us
    const randomWrapper = document.createElement("div");
    randomWrapper.setAttribute("class", "randomWrapper");
    contactContent.appendChild(randomWrapper);

    // We join the address div with the whole thing
    randomWrapper.appendChild(contactDirection);
    randomWrapper.appendChild(contactText); 

    content.appendChild(contactContent);    
    //We clean the background
    Object.assign(content.style, {
        backgroundColor: "rgb(25 23 22)",
        backgroundImage: "",
        backgroundSize: "",
        backgroundRepeat: "",
        backgroundPosition: "",
        backgroundAttachment: ""
      });
}

export default createContactPage;