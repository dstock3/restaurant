/* DOM manipulation */
function pageLoad() {
    function elementBuilder(element, classLabel, parentName) {
        let item = document.createElement(element);
        item.classList.add(classLabel);
        parentName.appendChild(item);
        return item;
    }
    
    content = document.getElementById("content");
    
    console.log(content);
}
