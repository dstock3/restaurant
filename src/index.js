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

function goToPage(tab) {
    if (tab === 'Home') {
        landingPage()
    };
    if (tab === 'Menu') {
        menu()
    };
    if (tab === 'Contact') {
        contact()
    }
}

const tabBuilder = (() => {
    const tabs = ['Home', 'Menu', 'Contact']
    let nav = elementBuilder('div', 'nav', content);
    for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i];
        let tabElement = elementBuilder('div', tab, nav);
        tabElement.textContent = tab;
        tabElement.addEventListener('click', goToPage(tab))
    }

})();








