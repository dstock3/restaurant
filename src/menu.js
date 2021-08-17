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

    const pageHead = elementBuilder("h1", "menu-head", pageDiv);
    pageHead.textContent = "Menu"

    const foodItem = (name, pic, description) => {
        return { name, pic, description }
    }

    const classic = foodItem(
        "Vito's Classic",
        "http://via.placeholder.com/640x360",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );

    const pep = foodItem(
        "Pepperoni Pizza",
        "http://via.placeholder.com/640x360",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );

    const veg = foodItem(
        "Vegetarian Pizza",
        "http://via.placeholder.com/640x360",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );

    const hawaiian = foodItem(
        "Hawaiian Pizza",
        "http://via.placeholder.com/640x360",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );

    const beef = foodItem(
        "Italian Beef",
        "http://via.placeholder.com/640x360",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );

    const sub = foodItem(
        "Meatball Sub",
        "http://via.placeholder.com/640x360",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );

    const menuList = [classic, pep, veg, hawaiian, beef, sub];

    const menuBuilder = (() => {
        for (let i = 0; i < menuList.length; i++) {
            let newFoodItem = menuList[i];
            let foodItemDiv = elementBuilder("div", "food-item", pageDiv);
            foodItemDiv.id = newFoodItem.name
            
            let foodItemHead = elementBuilder("h2", "food-head", foodItemDiv);
            foodItemHead.textContent = newFoodItem.name
            
            let foodItemPic = elementBuilder("img", "food-pic", foodItemDiv);
            foodItemPic.src = newFoodItem.pic

            let foodItemDescription = elementBuilder("p", "food-description", foodItemDiv);
            foodItemDescription.textContent = newFoodItem.description

        }

    })();

}

export { menu }