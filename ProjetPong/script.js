const bouton = document.getElementById("start");
bouton.addEventListener('click', (event) => {
    restart();
});

const balle ={

};
const joueur ={
    x : 0,
    y : 0,
}

function restart(){
    document.getElementById("Score").textContent = 0;
    timer();
}

function timer(){
    //chaque seconde on ajoute 1 au score 
    let score = parseInt(document.getElementById("Score").textContent);
    score = score + 1;
    document.getElementById("Score").textContent = score;
    setTimeout(timer, 1000);
}

const canvas = document.getElementById("gameplan");
