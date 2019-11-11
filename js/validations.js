window.onload = initialize;

function initialize() {
  botonsin = document.getElementById("modalboton");
  botonsin.addEventListener("click", validateForm);
}

// ESTE ES PARA VER SI FUNCIONA QUE SALGA EL ERROR EN LOS QUE ESTEN VACIOS
function validateForm(event) {
  event.preventDefault();
  var n = document.forms["myForm"]["fname"].value;
  if (n == "") {
    document.getElementById("p1").style.display = "unset";
    //return false;
  }
  var sn = document.forms["myForm"]["femail"].value;
  if (sn == "") {
    document.getElementById("p2").style.display = "unset";
    //return false;
  }
  var em = document.forms["myForm"]["fcomm"].value;
  if (em == "") {
    document.getElementById("p3").style.display = "unset";
    // return false;
  }
  validateCheck();
}

function validateCheck() {
  var checkbox = document.getElementById("customCheck");
  checkbox.addEventListener("change", validateCheck, false);
  var checked = checkbox.checked;
  if (!checked) {
    document.getElementById("p4").style.display = "unset";
  }

}