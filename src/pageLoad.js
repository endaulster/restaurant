import createRestaurantHomepage from "./homepage";
import createPageChanger from "./tabs";

function pageLoad()
{
    createPageChanger();
    createRestaurantHomepage();
}

export default pageLoad;