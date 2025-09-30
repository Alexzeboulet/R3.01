const bouton = document.getElementById("start");
const canvas = document.getElementById("gameplan");
const ctx = canvas.getContext("2d");
let leftPressed = false;
let rightPressed = false;
let secondLancement = false;
let id;
let RafId;

bouton.addEventListener('click', (event) => {
    restart();
});

document.getElementById("flecheGauche").addEventListener("mousedown", (event) => {
    leftPressed = true
});
document.getElementById("flecheGauche").addEventListener("mouseup", (event) => {
    leftPressed = false
});

document.getElementById("flecheDroite").addEventListener("mousedown", (event) => {
    rightPressed = true
});
document.getElementById("flecheDroite").addEventListener("mouseup", (event) => {
    rightPressed = false
});

document.getElementById("flecheGauche").addEventListener("touchstart", (event) => {
    leftPressed = true;
});
document.getElementById("flecheGauche").addEventListener("touchend", (event) => {
    leftPressed = false;
});

document.getElementById("flecheDroite").addEventListener("touchstart", (event) => {
    rightPressed = true;
});
document.getElementById("flecheDroite").addEventListener("touchend", (event) => {
    rightPressed = false;
});


document.addEventListener('keydown', (event) => {
    if(event.key === "ArrowLeft"){
        leftPressed = true;
    }
    else if (event.key === "ArrowRight"){
        rightPressed = true;
    }
});

document.addEventListener('keyup', (event) => {
    if(event.key === "ArrowLeft"){
        leftPressed = false;
    }
    else if (event.key === "ArrowRight"){
        rightPressed = false;
    }
});
const balle ={
    x : 0.5 * canvas.width ,
    y : 0.1 * canvas.height,
    taille : 15,
    dx : 2,
    dy : -2,
};
const joueur ={
    x : 0.40 * canvas.width,  
    y : 0.98 * canvas.height,
    rayon : canvas.width / 5,
    taille : 5,
}

function randomPourLesDirections(){
    if (Math.random() < 0.5) {
        return Math.random() * (1) - 3; 
    } else {
        return Math.random() * (1) + 2;
    }
}

function restart(){
    document.getElementById("Score").textContent = 0;
    balle.x = 0.5 * canvas.width;
    balle.y = 0.1 * canvas.height;
    balle.dx = randomPourLesDirections();
    balle.dy = randomPourLesDirections();
    if (!secondLancement) {
        timer();
        dessineTout();
        secondLancement = true;
    }
    
}

function timer(){
    //chaque seconde on ajoute 1 au score 
    let score = parseInt(document.getElementById("Score").textContent);
    score = score + 1;
    document.getElementById("Score").textContent = score;
    id = setTimeout(timer, 1000);
}

function creationBalle(){
    // création de la balle
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(balle.x, balle.y, balle.taille, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function dessineBalle(){
    creationBalle();
    if(balle.x + balle.dx > canvas.width-balle.taille || balle.x + balle.dx < balle.taille) {
        balle.dx = -balle.dx;
        if (balle.dx < 0){
            balle.dx -= 0.25;
        }
        else {
            balle.dx += 0.25;
        }
        balle.dy = balle.dy * (Math.random() * (1.10 - 0.90) + 0.90);
    }
    if(balle.y + balle.dy < balle.taille || (balle.y + balle.taille > joueur.y - joueur.taille / 2) && (balle.x >= joueur.x) && (balle.x <= joueur.x + joueur.rayon)) {
        balle.dy = -balle.dy
        if (balle.dy < 0){
            balle.dy -= 0.25;
        }
        else {
            balle.dy += 0.25;
        }
        balle.dx = balle.dx * (Math.random() * (1.10 - 0.90) + 0.90);
    }
    else if (balle.y + balle.dy > canvas.height-balle.taille) {
        end();
        return;
    }

    balle.x += balle.dx;
    balle.y += balle.dy;
}


function creationJoueur(){
    // création du joueur
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.rect(joueur.x, joueur.y, joueur.rayon,joueur.taille);
    ctx.fill();
    ctx.closePath();
}

function dessineJoueur(){
    creationJoueur();    
}

function dessineTout(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (leftPressed && joueur.x > 0) {
        joueur.x -= 7.5;
    }
    if (rightPressed && joueur.x + joueur.rayon < canvas.width) {
        joueur.x += 7.5;
    }
    dessineBalle();
    dessineJoueur();
    RafId = requestAnimationFrame(dessineTout);
}

function end(){
    alert("Partie terminé, vous avez eu un score de : " + document.getElementById("Score").textContent);
    if (parseInt(document.getElementById("Score").textContent) > parseInt(localStorage.getItem("bestScore"))) {
        localStorage.setItem("bestScore", document.getElementById("Score").textContent);
        document.getElementById("bestScore").textContent = parseInt(localStorage.getItem("bestScore"));
    }
    location.reload(true);
}

if (localStorage.getItem("bestScore") === null){
    localStorage.setItem("bestScore", 0);
}
document.getElementById("bestScore").textContent = localStorage.getItem("bestScore");
creationBalle();
creationJoueur();