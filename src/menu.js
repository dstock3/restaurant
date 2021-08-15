const menu = () => {
    /* DOM manipulation */
    function elementBuilder(element, classLabel, parentName) {
        let item = document.createElement(element);
        item.classList.add(classLabel);
        parentName.appendChild(item);
        return item;
    }

    const content = document.getElementById("content");

    const pageDiv = elementBuilder("div", "selected-page", content);
    pageDiv.id = "menu"

    return { elementBuilder, content }
}

export { menu }