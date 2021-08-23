const landingPage = () => {

    /* DOM manipulation */
    function elementBuilder(element, classLabel, parentName) {
        let item = document.createElement(element);
        item.classList.add(classLabel);
        parentName.appendChild(item);
        return item;
    }
    
    /* Page Contents */
    const content = document.getElementById("content");

    const pageDiv = elementBuilder("div", "selected-page", content);
    pageDiv.id = "landing";

    const landingHead = elementBuilder("h2", "landing-head", pageDiv);
    landingHead.textContent = "Welcome to Chef Vito's!"

    const landingImage = elementBuilder("img", "landing-image", pageDiv);
    landingImage.src = "/images/home.jpg";

    const descriptionSection = elementBuilder("section", "description-section", pageDiv);
    const description = elementBuilder("p", "description", descriptionSection);
    description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const hours = (() => {
        const section = elementBuilder("section", "hours", pageDiv);
        const head = elementBuilder("h2", "hours-head", section);
        head.textContent = "Hours";
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

}

export { landingPage }