// Suite d'exercice 2 

/* Exercice 1 q
const personne = {
    nom:"Alex",
    prenom:"Violette",
    age:18,
    ville:"Cherbourg",
};

/*console.log(personne.nom);
console.log(personne.prenom);
console.log(personne.age);
console.log(personne.ville); 


// Exercice 2 
const personne = {
        prenom:"Jonh",
        nom:"Doe",
        age:25,
        ville:"Rouen",
};

const personne2 = {
        prenom:"Jane",
        nom:"Doe",
        age:30,
        ville:"Paris",
};
const personne3 = {
        prenom:"Jim",
        nom:"Doe",
        age:35,
        ville:"Caen",
};
const personnes = [
    personne,
    personne2,
    personne3,
];

console.log(personnes[0]);
console.log(personnes[1]);
console.log(personnes[2]);

console.table(personnes); 

// Exercice 3 
personnes.push({
    prenom:"Marc",
    nom:"Doe",
    age:32,
    ville:"Marseille"
});
//console.table(personnes);
//console.log(personnes[3]);

// Exercice 4 

console.table(personnes);
personnes[0].prenom = "Jean";
personnes.splice(2,1);
console.table(personnes);


// Exercice 5
const tableau = [1,2,3,4,5,6,7,8,9,10];
console.log("Premier élément : " + tableau[0] + " Dernier élément : " + tableau[9] + " et de longueur : " +tableau.length);


// Exercice 6
const tableau = [10,20,30,40,50,60,70,80,90,100];
console.table(tableau);
tableau.reverse();
console.table(tableau);*/

// Exercice 7
const numbers = [2,5,1,9,0,3,7,4,6,8];
console.table(numbers);
numbers.sort();
console.table(numbers);


// Exercice 8
numbers.push(11);
console.table(numbers);
numbers.unshift(0);
console.table(numbers);
numbers.pop();
console.table(numbers);