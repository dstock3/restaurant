import { pageLoad } from './landingPage'
pageLoad()

let landingPage = elementBuilder("section", "landing-page", content);
let header = elementBuilder("header", "page-head",  landingPage);
header.textContent = "Vito's Pizzeria"
let article = elementBuilder("article", "landing-article", landingPage);
let landingImage = elementBuilder("img", "landing-image", landingPage);
landingImage.src = ``;


