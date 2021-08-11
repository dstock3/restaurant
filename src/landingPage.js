/* DOM manipulation */
const pageLoad = () => {
    function elementBuilder(element, classLabel, parentName) {
        let item = document.createElement(element);
        item.classList.add(classLabel);
        parentName.appendChild(item);
        return item;
    }
    
    let content = document.getElementById("content");
    
    console.log(content);
}

export { pageLoad }