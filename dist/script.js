"use strict";
function initApp() {
    console.log("bonjour");
}
initApp();
var tabMam = [];
function addMam(ordre, nom, image, paragraphe) {
    tabMam.push({
        ordre: ordre,
        nom: nom,
        image: image,
        paragraphe: paragraphe
    });
    var mam = document.getElementById("mami");
    //generation du contenu html
    mam.innerHTML += "\n\t\t<div>\n\t\t\t<h2>" + ordre + "</h2>\n\t\t\t<h3>" + nom + "</h3>\n\t\t\t<img src=\"" + image + "\" title=\"" + nom + "\" alt=\"" + nom + "\">\n\t\t\t<p>" + paragraphe + "</p>\n\t\t</div>\n\t";
}
;
addMam("Félin", "Chat", "../images/chat-1.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore!");
addMam("Cannidé", "Loup", "../images/loup1.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore!");
addMam("Primate", "Ouistiti", "../images/ouistiti.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore!");
addMam("Marsupial", "Koala", "../images/koala.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore!");
addMam("Herpestidae", "Suricat", "../images/surricat1.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore!");
console.table(tabMam);
