// SUJET 2
// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest.
// Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.
// Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest.
// Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.
// Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est à dire que ton programme devra comparer chaque élements entre eux à l'aide de 2 boucles imbriquées.

const fs = require('fs');

const fileName = process.argv[2];

// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    
		const arrayData = data.split(' ').map(value => parseInt(value))
	console.log('On calcule ', sunsetCalculation(arrayData), 'immeubles ayant une vue sur le soleil couchant...')	
});


// On incrémente un compteur d'appartement ayant un soleil couchant : i
// On définit l'index du premier immeuble  étudié : j=0
// On compare  le premier immeuble avec son voisin de droite
// buildings[j] vs buildings[j+1] 
// Si le voisin de droite i+1 est plus petit on n'incrémente pas le compteur, il reste au niveau i
// Si le voisin de droite i+1 est plus grand on incrémente le compteur,


// * i augmente de 1 : i = i+1
// * on change le référent immeuble : j=i+1
// On passe au suivant i+2, on le compare avec l'immeuble i

const sunsetCalculation = (buildings) => {
	let sunsetBuildings = 1
	let buildingReference = 0
	for (let j = 1 ; j <= buildings.length-1 ; j++){
		if (buildings[j] > buildings[buildingReference]) {
		sunsetBuildings ++
		buildingReference = j
		}
	}
	return sunsetBuildings
}