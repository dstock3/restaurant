(()=>{"use strict";(()=>{function t(t,e,n){let i=document.createElement(t);return i.classList.add(e),n.appendChild(i),i}const e=t("div","landing-page",document.getElementById("content"));t("h1","page-head",e).textContent="Chef Vito's Pizzeria",t("img","landing-image",e).src="http://via.placeholder.com/640x360";const n=t("section","description-section",e);t("section","description",n).textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",(()=>{const n=t("section","hours",e);t("h2","hours-head",n).textContent="Hours";const i=t("ul","hours-list",n),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];let a=[];for(let e=0;e<o.length;e++){let n=t("li",`${o[e]}-hours`,i);"Sunday"===o[e]||"Monday"===o[e]?(n.textContent=`${o[e]}: 9am - 5pm`,a.push(n)):(n.textContent=`${o[e]}: 9am - 9pm`,a.push(n))}})(),(()=>{const n=t("section","location-section",e);t("h2","location-head",n).textContent="Location";t("p","address",n).textContent="999 Firehouse Lane, New York, NY 10210"})()})()})();