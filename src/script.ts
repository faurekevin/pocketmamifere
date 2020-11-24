function initApp() :void {
	console.log("bonjour");
}
initApp();
/*
// tableau
let mamArray = [];
//generation du tableau
function newMam(){

};
*/
type mammifere = {
	ordre:string;
	nom:string;
	image:string;
	paragraphe:string;
};

let tabMam : mammifere[] = [];

function addMam(ordre:string, nom:string, image:string , paragraphe:string , /* tabMam:mammifere [] */) {
	tabMam.push({
		ordre: ordre,
		nom: nom,
		image: image,
		paragraphe: paragraphe
	});
	let mam=document.getElementById("mami")!;

//generation du contenu html
mam.innerHTML+=`
		<div>
			<h2>${ordre}</h2>
			<h3>${nom}</h3>
			<img src="${image}" title="${nom}" alt="${nom}">
			<p>${paragraphe}</p>
		</div>
	`;
};

addMam ("Félin", "Chat", "../images/chat-1.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore!");
addMam ("Cannidé", "Loup", "../images/loup1.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore!");
addMam ("Primate", "Ouistiti", "../images/ouistiti.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore!");
addMam ("Marsupial", "Koala", "../images/koala.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore!");
addMam ("Herpestidae", "Suricat", "../images/surricat1.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore!");
addMam ("Ursidae", "Grizzly", "../images/ours.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, inventore!");

console.table(tabMam);