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

    const contactHead = elementBuilder("h1", "contact-head", pageDiv);
    contactHead.textContent = "Contact Information"

    const contactBody = elementBuilder("section", "contact-section", pageDiv);
    const phone = elementBuilder("p", "phone", contactBody);
    phone.textContent = "Phone Number: (973) 111-1111"
    const email = elementBuilder("p", "email", contactBody);
    email.textContent = "E-Mail: contact@vitospizza.com"
}

export { contact }