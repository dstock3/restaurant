import { landingPage } from './landingPage'
import { contact } from './contact'

/* DOM manipulation */
function elementBuilder(element, classLabel, parentName) {
    let item = document.createElement(element);
    item.classList.add(classLabel);
    parentName.appendChild(item);
    return item;
}

const content = document.getElementById("content");

const tabBuilder = (() => {

})();

landingPage()
contact()








