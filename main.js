(()=>{"use strict";const e=()=>{function e(e,t,i){let n=document.createElement(e);return n.classList.add(t),i.appendChild(n),n}const t=e("div","selected-page",document.getElementById("content"));t.id="landing",e("h2","landing-head",t).textContent="Welcome to Chef Vito's!",e("img","landing-image",t).src="/images/home.jpg";const i=e("section","description-section",t);e("p","description",i).textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",(()=>{const i=e("section","hours",t);e("h2","hours-head",i).textContent="Hours";const n=e("ul","hours-list",i),o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];let a=[];for(let t=0;t<o.length;t++){let i=e("li",`${o[t]}-hours`,n);"Sunday"===o[t]||"Monday"===o[t]?(i.textContent=`${o[t]}: 9am - 5pm`,a.push(i)):(i.textContent=`${o[t]}: 9am - 9pm`,a.push(i))}})()},t=()=>{function e(e,t,i){let n=document.createElement(e);return n.classList.add(t),i.appendChild(n),n}const t=e("div","selected-page",document.getElementById("content"));t.id="contact";const i=e("section","contact-section",t);(()=>{e("h2","location-head",i).textContent="Location",e("img","location-image",i).src="/images/map.png";e("p","address",i).textContent="999 Firehouse Lane",e("p","address",i).textContent="New York, NJ 10210"})(),e("p","phone",i).textContent="Phone Number: (973) 111-1111",e("p","email",i).textContent="E-Mail: contact@vitospizza.com"},i=()=>{function e(e,t,i){let n=document.createElement(e);return n.classList.add(t),i.appendChild(n),n}const t=e("div","selected-page",document.getElementById("content"));t.id="menu";const i=(e,t,i,n)=>({name:e,pic:t,description:i,id:n}),n=[i("Vito's Classic","/images/cheese.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","classic"),i("Pepperoni Pizza","/images/pepperoni.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","pep"),i("Vegetarian Pizza","/images/veg.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","veg"),i("Hawaiian Pizza","/images/haw.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","hawaii"),i("Italian Beef","/images/beef.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","beef"),i("Meatball Sub","/images/meatball.jpg","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","sub")];(()=>{for(let i=0;i<n.length;i++){let o=n[i],a=e("div","food-item",t);a.id=o.id,e("h2","food-head",a).textContent=o.name,e("img","food-pic",a).src=o.pic,e("p","food-description",a).textContent=o.description}})()};function n(e,t,i){let n=document.createElement(e);return n.classList.add(t),i.appendChild(n),n}const o=document.getElementById("content"),a=n("div","head-div",o);function u(e,t){let i=document.getElementById(e),n=document.getElementById(t);i.classList.remove("selected"),n.classList.remove("selected")}function d(){o.childNodes[2].remove()}n("h1","page-head",a).textContent="Chef Vito's Pizzeria",(()=>{const a=["Home","Menu","Contact"];let s=n("nav","main-nav",o);e();for(let o=0;o<a.length;o++){let l=a[o],c=n("div","nav-item",s);c.id=l,c.textContent=l,document.getElementById("Home").classList.add("selected"),c.addEventListener("click",(function(){c.classList.add("selected"),"Home"===l&&(u("Menu","Contact"),d(),e()),"Menu"===l&&(u("Home","Contact"),d(),i()),"Contact"===l&&(u("Home","Menu"),d(),t())}))}})()})();