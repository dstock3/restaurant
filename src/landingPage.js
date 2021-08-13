const pageLoad = () => {

    /* DOM manipulation */
    function elementBuilder(element, classLabel, parentName) {
        let item = document.createElement(element);
        item.classList.add(classLabel);
        parentName.appendChild(item);
        return item;
    }
    
    /* Page Contents */
    const content = document.getElementById("content");
    
    const landingPage = elementBuilder("div", "landing-page", content);
    const header = elementBuilder("header", "page-head",  landingPage);
    header.textContent = "Vito's Pizzeria"

    const landingImage = elementBuilder("img", "landing-image", landingPage);
    landingImage.src = `http://via.placeholder.com/640x360`;

    const description = elementBuilder("section", "landing-article", landingPage);
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const hours = (() => {
        const section = elementBuilder("section", "hours", landingPage);
        const listElement = elementBuilder("ul", "hours-list", section);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        let listItemArray = []
        for (let i = 0; i < days.length; i++) {
            let listItem = elementBuilder("li", `${days[i]}-hours`, listElement)
            if ((days[i] === "Sunday") || (days[i] === "Monday")) {
                listItem.textContent = `${days[i]}: 9am - 5pm`;
                listItemArray.push(listItem);
            } else {
                listItem.textContent = `${days[i]}: 9am - 9pm`;
                listItemArray.push(listItem);
            }
        }
        return { listItemArray, section, listElement };
    })();

    const location = (() => {
        const section = elementBuilder("section", "location-section", landingPage)
        const header = elementBuilder("header", "location-head", section);
        header.textContent = "Location";
        const address = elementBuilder("p", "address", section);
        address.textContent = "999 Firehouse Lane, New York, NY 10210";
        return { section, header, address }
    })();

}

    

export { pageLoad }