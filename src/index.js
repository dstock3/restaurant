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

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/* Basic Site Elements */
const content = document.getElementById("content");
const siteHead = elementBuilder("h1", "page-head",  content);
siteHead.textContent = "Chef Vito's Pizzeria";

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

        let contentChildren = content.childNodes;
        let existingPage = contentChildren[2];

        tabElement.addEventListener('click', function goToPage() {
            tabElement.classList.add("selected");
            
            if (tab === 'Home') {
                existingPage.remove()
                landingPage()
            };

            if (tab === 'Menu') {
                existingPage.remove()
                menu()
            };
            if (tab === 'Contact') {
                existingPage.remove()
                contact()
            }
        });

    }
})();








