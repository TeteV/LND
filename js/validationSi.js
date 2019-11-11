window.onload = initialize;

function initialize() {
  botonsin = document.getElementById("botonsi");
  botonsin.addEventListener("click", validateForm);
}

  function validateAge() {
    var x , text;
    x = document.getElementById("age").value;
    if (isNaN(x) || x < 18 || x > 99) {
        text =  "Must be +18";
    } else{
      text = "You have +18";
    }
    document.getElementById("agesi1").innerHTML = text;
  }

  function validateForm(event) {
    event.preventDefault();
    var n = document.forms["myForm2"]["nameSi"].value;
    if (n == "") {
      document.getElementById("si1").style.display = "unset";
      //return false;
    }
    var sn = document.forms["myForm2"]["2ndnameSi"].value;
    if (sn == "") {
      document.getElementById("si2").style.display = "unset";
     //return false;
    }
    var em = document.forms["myForm2"]["emailSi"].value;
    if (em == "") {
      document.getElementById("emsi1").style.display = "unset";
     // return false;
    }
    var psw = document.forms["myForm2"]["pswSi"].value;
    if (psw == "") {
      document.getElementById("pswsi1").style.display = "unset";
     // return false;
    }
    var sel = document.forms["myForm2"]["mentions"].value;
    if (sel == "") {
      document.getElementById("finsi1").style.display = "unset";
     // return false;
    }
    validateAge();
  }
