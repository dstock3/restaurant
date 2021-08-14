const contact = () => {
    /* DOM manipulation */
    function elementBuilder(element, classLabel, parentName) {
        let item = document.createElement(element);
        item.classList.add(classLabel);
        parentName.appendChild(item);
        return item;
    }

    const content = document.getElementById("content");

    return { elementBuilder, content }
}

export { contact }