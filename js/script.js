let figures = document.querySelectorAll("figure");

let imgs = document.querySelectorAll("img");

let elementMap;

let idInterval;

let compteur = 0;

let i = 0;

let btnPrecedent = document.getElementById("precedent");

let btnSuivant = document.getElementById("suivant");

let btnDemarer = document.getElementById("demarer");

let btnPause = document.getElementById("stop");

btnSuivant.addEventListener("click", imgSuivante);

function imgSuivante(){
    figures[compteur].classList.remove("afficher");
   if(compteur == 3){
       compteur = -1;
   }
   if(compteur != 3){
    figures[compteur+1].classList.add("afficher");
    compteur++;
   }
}


btnPrecedent.addEventListener("click", imgPrecedent);

function imgPrecedent(){
    figures[compteur].classList.remove("afficher");
   if(compteur == 0){
       compteur = 1;
   }
   if(compteur != 0){
    figures[compteur-1].classList.add("afficher");
    compteur--;
   }
}


btnPause.addEventListener("click", playPause);
btnDemarer.addEventListener("click", playPause);

function playPause(){
    if(btnPause.classList.contains("pause")){
        idInterval = window.setInterval("imgSuivante()", 5000);
        btnPause.style.display="none";
        btnDemarer.style.display="block";
        btnPause.classList.remove("pause");
    }else{
         window.clearInterval(idInterval);
         btnPause.style.display="block";
         btnDemarer.style.display="none";
         btnPause.classList.add("pause");
    }
}

for(let i = 0; i < figures.length; i++){
        elementMap = document.createElement("map");
        switch(i){
            case 0 : elementMap.name="chat";
            break;
            case 1 : elementMap.name="chien";
            break;
            case 2 : elementMap.name="lapins";
            break;
            case 3 : elementMap.name="poussin";
            break;
            default: "erreur, ce name n'existe pas";
        }
        elementMap.id="map";
        let area = document.createElement("area");
        area.id="area";
        area.href="#";
        area.shape="rect"+i;
        switch(i){
            case 0 : area.coords="0,0,626,383";
            break;
            case 1 : area.coords="0,0,626,417";
            break;
            case 2 : area.coords="0,0,626,383";
            break;
            case 3 : area.coords="0,0,626,383";
            break;
            default: "erreur, cette coordonnée n'existe pas";
        }
        switch(i){
            case 0 : area.title="chat";
            break;
            case 1 : area.title="chien";
            break;
            case 2 : area.title="lapins";
            break;
            case 3 : area.title="poussin";
            break;
            default: "erreur, ce title n'existe pas";
        }
        elementMap.appendChild(area);
        figures[i].appendChild(elementMap);
    }

for(let i=0; i<imgs.length; i++){
    switch(i){
        case 0 : imgs[i].setAttribute("usemap", "#chat");
        break;
        case 1 : imgs[i].setAttribute("usemap", "#chien");
        break;
        case 2 : imgs[i].setAttribute("usemap", "#lapins");
        break
        case 3 : imgs[i].setAttribute("usemap", "#poussin");
        break;
        default: "erreur, cet attribut n'existe pas";
    }

}