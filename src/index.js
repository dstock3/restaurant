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

function goToPage(tab) 

const tabBuilder = (() => {
    const tabs = ['Home', 'Menu', 'Contact']
    let nav = elementBuilder('nav', 'main-nav', content);

    for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i];
        let tabElement = elementBuilder('div', "nav-item", nav);
        tabElement.id = tab
        tabElement.textContent = tab;
        
        tabElement.addEventListener('click', function goToPage() {
            tabElement.classList.add("selected");

            if (tab === 'Home') {
                //removeChildren(content)
                landingPage()
            };

            if (tab === 'Menu') {
                //removeChildren(content)
                menu()
            };

            if (tab === 'Contact') {
                //removeChildren(content)
                contact()
            }
        });

    }
})();








