const form = document.querySelector("form.quizz");
let tableauResultats = [];
const reponses = ['c','a','c']; // réponses correctes
const titreResultats = document.querySelector(".resultats h2");
const noteResultats = document.querySelector(".note");
const aideResultats = document.querySelector(".aide");
const toutesLesquestions = document.querySelectorAll(".question-block");
let verifTableau = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    tableauResultats = [];

    for (let i = 1; i <= reponses.length; i++) {
        const choix = document.querySelector(`input[name="q${i}"]:checked`);
        if (choix) {
            tableauResultats.push(choix.value);
        } else {
            tableauResultats.push(null);
        }
    }

    verifFunc(tableauResultats);
});

function verifFunc(tabResultats){
    verifTableau = [];
    for(let a = 0; a < reponses.length; a++){
        if(tabResultats[a] === reponses[a]){
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
}

function afficherResultats(tabcheck){
    const nbDeFautes = tabcheck.filter(el => el !== true).length;
    switch(nbDeFautes){
        case 0: 
          titreResultats.innerText = "Bravo, c'est un sans faute!";
          aideResultats.innerText = '';
          noteResultats.innerText = "3/3";
          break;
        case 1: 
          titreResultats.innerText = "Vous y êtes presque";
          aideResultats.innerText = 'Retentez une autre réponse dans les cases rouges puis validez !';
          noteResultats.innerText = "2/3";
          break;
        case 2: 
          titreResultats.innerText = "Encore un effort";
          aideResultats.innerText = 'Retentez une autre réponse dans les cadres rouges puis validez !';
          noteResultats.innerText = "1/3";
          break;
        case 3: 
          titreResultats.innerText = "Peut mieux faire !";
          aideResultats.innerText = 'Retentez une autre réponse dans les cadres rouges puis validez !';
          noteResultats.innerText = "0/3";
          break;
        default:
          titreResultats.innerText = "Oups, cas inattendu !";
    }
}

function couleursFonction(tabValBool) {
    for (let j = 0; j < tabValBool.length; j++) {
        if (tabValBool[j] === true) {
            toutesLesquestions[j].style.background = 'lightgreen';
        } else {
            toutesLesquestions[j].style.background = '#ffb8b8';
            toutesLesquestions[j].classList.add('echec');
            setTimeout(()=>{
                toutesLesquestions[j].classList.remove('echec');
            },500);
        }
    }
}
