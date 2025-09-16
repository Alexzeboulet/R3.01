// AFFICHER DANS LA CONSOLE console.log("Hello World");

// AFFICHER DANS LA PAGE WEB document.write("Hello World");

// AFFICHER DANS UNE BOITE DE DIALOGUE alert("Hello World");

// DEMANDER UNE SAISIE A L'UTILISATEUR prompt("Hello World");

/* Exercice 1 pour demander une température 
var températureCelsius = prompt("Entrez une température en Celsius :");
var températureFahrenheit = (températureCelsius * 9/5) + 32;

document.write(températureCelsius + "°C est égal à " + températureFahrenheit + "°F") */

/* Exercice 2 pour demander la longueur et la largeur d'un rectangle ; 

var longueur = prompt("Entrez la longueur du rectangke");
var largeur = prompt("Entrez la largeur du rectangle");
document.write("Le rectangle de longueur " + longueur + " et de largeur " + largeur + " a une aire de " + (longueur * largeur)); */


/* Exercice 3 pour demander un prénom et un nom et les concaténer et les afficher;
var prénom = prompt("Entrez votre prénom");
var nom = prompt("Entrez votre Nom");
document.write ("Bonjour " + prénom + " " + nom);
*/ 

/* Exercice 4 Stocker un montant HT et une constante TVA puis calculer le montant TTC et afficher le tout; 

var montant = prompt("DOnnez moi un montant pour que je calcule le montant TTC avec une tva de 20%");
const TVA = 0.20;
var montantTTC = montant * (1 + TVA);
document.write("Le montant que vous avez donné était de " + montant + "euros et avec une tva qui correspond à " + (TVA*100) + "%, le montant TTC est de " + montantTTC + "euros.");*/

/* Exercice 5 est ce que 
((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true) est vrai ou faux ? 

var résultat = ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true);
document.write("Le résultat de l'expression est : " + résultat); */

/* Exercice 6 pour demander le poids et la taille d'une personne et calculer son IMC et afficher l'IMC; 

var poids = prompt("Quel est votre poids en kg ?");
var taille = prompt("Quel est votre taille en m ?");
var IMC = poids / (taille * taille);
document.write("Votre IMC est de " + IMC.toFixed(2)); */ 

/* Exercice 7 : Déclarez une constante pour le montant minimal d'une commande pour la livraison gratuite et Déclarez une variable pour le montant total de la commande.
Si le montant total est supérieur ou égal au montant minimum, affichez
"Livraison gratuite !".
Sinon, affichez "Frais de livraison : X euros".

const MontantMinimal = 20;
var montantCommande = prompt("Quel est le montant de votre commande ?");
var résultat = (montantCommande > 20);
if (résultat = false){
    alert("Frais de Livraison : X euros");
}
else {
    alert("Livraison Gratuite");
}

*/

/* Exercice 8 */

var nombreBinaire = "10101011";
var décimal = parseInt(nombreBinaire);
document.write(nombreBinaire + " et sa version décimale " + décimal );