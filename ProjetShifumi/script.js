let nombreVictoire = 0;
let nombreDéfaite = 0;
let nombreEgalité = 0;

const boutons = document.querySelectorAll('.shifumi');
boutons.forEach(bouton =>{
    bouton.addEventListener('click', (event) => {
    const actionChoisit = bouton.textContent;
    let choixaléatoire = Math.floor(Math.random() * 3) + 1;
    if (actionChoisit == "Pierre") {
        if (choixaléatoire == 1){
            document.getElementById("choixBot").textContent = "Pierre";
            nombreEgalité = nombreEgalité + 1;
            document.getElementById("nombreEgalite").textContent = nombreEgalité;
        }
        else if (choixaléatoire == 2) {
            document.getElementById("choixBot").textContent = "Feuille";
            nombreDéfaite = nombreDéfaite + 1;
            document.getElementById("nombreDefaite").textContent = nombreDéfaite;
        }
        else {
            document.getElementById("choixBot").textContent = "Ciseau";
            nombreVictoire = nombreVictoire + 1;
            document.getElementById("nombreVictoire").textContent = nombreVictoire;
        }
    }
    else if (actionChoisit == "Feuille") {
        if (choixaléatoire == 2){
            document.getElementById("choixBot").textContent = "Feuille";
            nombreEgalité = nombreEgalité + 1;
            document.getElementById("nombreEgalite").textContent = nombreEgalité;
        }
        else if (choixaléatoire == 3) {
            document.getElementById("choixBot").textContent = "Ciseau";
            nombreDéfaite = nombreDéfaite + 1;
            document.getElementById("nombreDefaite").textContent = nombreDéfaite;
        }
        else {
            document.getElementById("choixBot").textContent = "Pierre";
            nombreVictoire = nombreVictoire + 1;
            document.getElementById("nombreVictoire").textContent = nombreVictoire;
        }
    }
    else {
        if (choixaléatoire == 3){
            document.getElementById("choixBot").textContent = "Ciseau";
            nombreEgalité = nombreEgalité + 1;
            document.getElementById("nombreEgalite").textContent = nombreEgalité;
        }
        else if (choixaléatoire == 1) {
            document.getElementById("choixBot").textContent = "Pierre";
            nombreDéfaite = nombreDéfaite + 1;
            document.getElementById("nombreDefaite").textContent = nombreDéfaite;
        }
        else {
            document.getElementById("choixBot").textContent = "Feuille";
            nombreVictoire = nombreVictoire + 1;
            document.getElementById("nombreVictoire").textContent = nombreVictoire;
        }
    }
    })
    });

    // Bouton réinitialiser
    const boutonRéinitialiser = document.getElementById('réinitialisation');
    boutonRéinitialiser.addEventListener('click', () => {
        nombreVictoire = 0;
        nombreDéfaite = 0;
        nombreEgalité = 0;
        document.getElementById("nombreVictoire").textContent = nombreVictoire;
        document.getElementById("nombreDefaite").textContent = nombreDéfaite;
        document.getElementById("nombreEgalite").textContent = nombreEgalité;
        document.getElementById("choixBot").textContent = "rien car vous n'avez rien choisi pour l'instant"; 
    });