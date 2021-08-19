const contact = () => {
    /* DOM manipulation */
    function elementBuilder(element, classLabel, parentName) {
        let item = document.createElement(element);
        item.classList.add(classLabel);
        parentName.appendChild(item);
        return item;
    }

    const content = document.getElementById("content");

    const pageDiv = elementBuilder("div", "selected-page", content);
    pageDiv.id = "contact";

    const contactBody = elementBuilder("section", "contact-section", pageDiv);

    const location = (() => {
        const head = elementBuilder("h2", "location-head", contactBody);
        head.textContent = "Location";
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