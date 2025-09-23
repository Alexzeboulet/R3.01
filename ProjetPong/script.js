const bouton = document.getElementById("start");
const canvas = document.getElementById("gameplan");
const ctx = canvas.getContext("2d");

bouton.addEventListener('click', (event) => {
    restart();
});

document.addEventListener ('appuieClavier' , (event) => {
    if(event.key === "ArrowLeft"){
        x = x - 1;
    }
    else if (event.key === "ArrowRight"){
        x = x + 1;
    }
});
let secondLancement = false;
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
    if(balle.y + balle.dy > canvas.height-balle.taille || balle.y + balle.dy < balle.taille) {
        balle.dy = -balle.dy;
    }

    balle.x += balle.dx;
    balle.y += balle.dy;
}


function creationJoueur(){
    // création du joueur
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.rect(joueur.x, joueur.y, canvas.width / 5, 10);
    ctx.fill();
    ctx.closePath();
}

function dessineJoueur(){
    creationJoueur();    
}

function dessineTout(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    dessineBalle();
    dessineJoueur();
    RafId = requestAnimationFrame(dessineTout);
}