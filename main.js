(()=>{"use strict";(()=>{function e(e,t,i){let a=document.createElement(e);return a.classList.add(t),i.appendChild(a),a}const t=e("section","landing-page",document.getElementById("content"));e("header","page-head",t).textContent="Vito's Pizzeria",e("img","landing-image",t).src="http://via.placeholder.com/640x360",e("article","landing-article",t).textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";const a=e("article","hours",t),n=e("ul","hours",a),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];(t=>{let a=[];for(i=0;i<t.length;i++){let u=e("li",`${t[i]}-hours`,n);"Sunday"===t[i]||"Monday"===t[i]?(u.textContent=`${o[i]}: 9am - 5pm`,a.push(u)):(u.textContent=`${t[i]}: 9am - 9pm`,a.push(u))}})(o)})()})();