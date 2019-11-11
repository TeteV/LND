window.onload = inicializar;
var refLikesLocos;
var NLikes = 0;
var NLikes2 = 0;
var NLikes3 = 0;

function inicializar() {
    NLikess = document.getElementById("moto1");
    NLikess.innerHTML = NLikes;

    NLikess2 = document.getElementById("moto2");
    NLikess2.innerHTML = NLikes2;

    NLikess3 = document.getElementById("moto3");
    NLikess3.innerHTML = NLikes3;
}

function addLike(){
    NLikes++;
    NLikess.innerHTML = NLikes;
}

function addLike2(){
    NLikes2++;
    NLikess2.innerHTML = NLikes2;
}

function addLike3(){
    NLikes3++;
    NLikess3.innerHTML = NLikes3;
}