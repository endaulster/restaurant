const createRestaurantHomepage = () => {
    const content = document.querySelector("body > div");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    // Create image
    const image = document.createElement("img");
    image.src = "https://miro.medium.com/v2/resize:fit:1400/0*VqMkTYoYGOj5hQYU.jpg"
    // image.height = "300";
    // pageContent.appendChild(image);

    // Create title
    const title = document.createElement("h1");
    title.textContent = "Il Quotidiano";
    title.setAttribute("id", "hometitle");
    pageContent.appendChild(title);

    // Create welcoming text
    const homewelcome = document.createElement("p");
    homewelcome.textContent = "Fatto in casa — feel like home with the best cucina italiana in the city!";
    homewelcome.setAttribute("id", "homewelcome");
    pageContent.appendChild(homewelcome);

    // Load
    content.appendChild(pageContent);
    
    //We add a background image to main page
    Object.assign(content.style, {
        backgroundImage: "url(restaurant.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed"
      });
}

export default createRestaurantHomepage;