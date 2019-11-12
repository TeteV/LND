window.onload = initialize;

function initialize(){
    butt = document.getElementById("buttonsin");
    butt.addEventListener("click", addNumbers)
}

function addNumbers(){
    var y,x,z;
    a = document.getElementById("one");
    b = document.getElementById("two");
    c = document.getElementById("three");
    d = document.getElementById("res");


   y = Math.random() * (7 - 1) + 1;
    var q = Math.round(y);
   a.innerHTML = q;

   x = Math.random() * (7 - 1) + 1;
    var w = Math.round(x);
   b.innerHTML = w;

   z = Math.random() * (7 - 1) + 1;
    var e = Math.round(z);
   c.innerHTML = e;

    d.innerHTML = q+w+e;
    e = q+e+w;
    
    if (e == 15) {
        document.getElementById("resulty2").style.display = "unset";
        document.getElementById("resulty1").style.display = "none";
      } else {
        document.getElementById("resulty1").style.display = "unset";
        document.getElementById("resulty2").style.display = "none";
      }
}

