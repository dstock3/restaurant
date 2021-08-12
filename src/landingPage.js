const pageLoad = () => {

    /* DOM manipulation */
    function elementBuilder(element, classLabel, parentName) {
        let item = document.createElement(element);
        item.classList.add(classLabel);
        parentName.appendChild(item);
        return item;
    }
    
    /* Page Contents */
    let content = document.getElementById("content");

    let landingPage = elementBuilder("section", "landing-page", content);
    let header = elementBuilder("header", "page-head",  landingPage);
    let article = elementBuilder("article", "landing-article", landingPage);
    let landingImage = elementBuilder("img", "landing-image", landingPage);
    landingImage.src = ``;

}

export { pageLoad }