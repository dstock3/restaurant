import { landingPage } from './landingPage'
import { contact } from './contact'
import { menu } from './menu'

/* DOM manipulation */
function elementBuilder(element, classLabel, parentName) {
    let item = document.createElement(element);
    item.classList.add(classLabel);
    parentName.appendChild(item);
    return item;
}

/* Basic Site Elements */
const content = document.getElementById("content");
const headDiv = elementBuilder("div", "head-div", content);
const siteHead = elementBuilder("h1", "page-head",  headDiv);
siteHead.textContent = "Chef Vito's Pizzeria";

function tabSelect(deselectedTabOne, deselectedTabTwo) {
    let firstTab = document.getElementById(deselectedTabOne);
    let secondTab = document.getElementById(deselectedTabTwo);
    firstTab.classList.remove("selected");
    secondTab.classList.remove("selected");
}

function removeExistingPage() {
    let contentChildren = content.childNodes;
    let existingPage = contentChildren[2];
    existingPage.remove()
}

const tabBuilder = (() => {
    const tabs = ['Home', 'Menu', 'Contact']
    let nav = elementBuilder('nav', 'main-nav', content);

    landingPage()

    for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i];
        let tabElement = elementBuilder('div', "nav-item", nav);
        tabElement.id = tab
        tabElement.textContent = tab;
        
        const landing = document.getElementById("Home");
        landing.classList.add("selected");

        tabElement.addEventListener('click', function goToPage() {
            tabElement.classList.add("selected");
            
            if (tab === 'Home') {
                tabSelect("Menu", "Contact");

                removeExistingPage() 
                landingPage()
            };

            if (tab === 'Menu') {
                tabSelect("Home", "Contact");

                removeExistingPage() 
                menu()
            };
            if (tab === 'Contact') {
                tabSelect("Home", "Menu");
                
                removeExistingPage() 
                contact()
            }
        });

    }
})();

export { elementBuilder }










