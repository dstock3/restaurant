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
    header.textContent = "Vito's Pizzeria"
    let article = elementBuilder("article", "landing-article", landingPage);
    
    article.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    let landingImage = elementBuilder("img", "landing-image", landingPage);
    landingImage.src = `http://via.placeholder.com/640x360`;

}

export { pageLoad }