const bouton = document.getElementById("start");
const canvas = document.getElementById("gameplan");
const ctx = canvas.getContext("2d");
let leftPressed = false;
let rightPressed = false;
let secondLancement = false;

bouton.addEventListener('click', (event) => {
    restart();
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
    taille : 10,
    dx : 2,
    dy : 2,
};
const joueur ={
    x : 0.40 * canvas.width,  
    y : 0.95 * canvas.height,
    rayon : canvas.width / 5,
    taille : 10,
}

function restart(){
    document.getElementById("Score").textContent = 0;
    if (!secondLancement) {
        timer();
        dessineTout();
        secondLancement = true;
    }
    balle.x = 0.5 * canvas.width;
    balle.y = 0.1 * canvas.height;
    balle.dx = 2;
    balle.dy = 2;
}

function timer(){
    //chaque seconde on ajoute 1 au score 
    let score = parseInt(document.getElementById("Score").textContent);
    score = score + 1;
    document.getElementById("Score").textContent = score;
    setTimeout(timer, 1000);
}

function creationBalle(){
    // création de la balle
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(balle.x, balle.y, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function dessineBalle(){
    creationBalle();
    if(balle.x + balle.dx > canvas.width-balle.taille || balle.x + balle.dx < balle.taille) {
        balle.dx = -balle.dx;
    }
    if(balle.y + balle.dy < balle.taille || (balle.y + balle.taille > joueur.y - joueur.taille / 2) && (balle.x > joueur.x) && (balle.x < joueur.x + joueur.rayon)) {
        balle.dy = -balle.dy;
    }
    else if (balle.y + balle.dy > canvas.height-balle.taille) {
        end();
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
        joueur.x -= 5;
    }
    if (rightPressed && joueur.x + joueur.rayon < canvas.width) {
        joueur.x += 5;
    }
    dessineBalle();
    dessineJoueur();
    RafId = requestAnimationFrame(dessineTout);
}

function end(){
    // à faire car ferme juste la page
    close();
}