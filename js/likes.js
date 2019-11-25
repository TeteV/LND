window.onload = inicializar;
var refLikesLocos;
var nLikes = 0;
var nLikes2 = 0;
var nLikes3 = 0;

function inicializar() {
    nLikess = document.getElementById("moto1");
    nLikess.innerHTML = nLikes;

    nLikess2 = document.getElementById("moto2");
    nLikess2.innerHTML = nLikes2;

    nLikess3 = document.getElementById("moto3");
    nLikess3.innerHTML = nLikes3;

    verIm = document.getElementById("myImg");
    verIm.addEventListener("click", verImagen);

    verIm = document.getElementById("myImg2");
    verIm.addEventListener("click", verImagen2);

    verIm = document.getElementById("myImg3");
    verIm.addEventListener("click", verImagen3);
}

function addLike(){
    nLikes++;
    nLikess.innerHTML = nLikes;
}

function addLike2(){
    nLikes2++;
    nLikess2.innerHTML = nLikes2;
}

function addLike3(){
    nLikes3++;
    nLikess3.innerHTML = nLikes3;
}


function verImagen(){
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  //captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
}


function verImagen2(){
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg2");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    //captionText.innerHTML = this.alt;
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  }

  function verImagen3(){
    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg3");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      //captionText.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    }