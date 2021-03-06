import { elementBuilder } from './index'

const contact = () => {
    const content = document.getElementById("content");

    const pageDiv = elementBuilder("div", "selected-page", content);
    pageDiv.id = "contact";

    const contactBody = elementBuilder("section", "contact-section", pageDiv);

    const location = (() => {
        const head = elementBuilder("h2", "location-head", contactBody);
        head.textContent = "Location";

        const locationImage = elementBuilder("img", "location-image", contactBody);
        locationImage.src = "./images/map.png";

        const address = elementBuilder("p", "address", contactBody);
        address.textContent = "999 Firehouse Lane";
        const addressTwo = elementBuilder("p", "address", contactBody);
        addressTwo.textContent = "New York, NJ 10210";
        return { head, address }
    })();

    const phone = elementBuilder("p", "phone", contactBody);
    phone.textContent = "Phone Number: (973) 111-1111"
    const email = elementBuilder("p", "email", contactBody);
    email.textContent = "E-Mail: contact@vitospizza.com"

}

export { contact }