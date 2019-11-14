window.onload = initialize;

function initialize(){
    butt = document.getElementById("buttonsin");
    butt.addEventListener("click", addNumbers);

    butt1 = document.getElementById("buttonsin1");
    butt1.addEventListener("click", addNumbers1);

    butt2 = document.getElementById("buttonsin2");
    butt2.addEventListener("click", addNumbers2);
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
        document.getElementById("divcool").style.display = "unset";
      } else {
        document.getElementById("resulty1").style.display = "unset";
        document.getElementById("resulty2").style.display = "none";
        document.getElementById("divcool").style.display = "none";
      }
}

function addNumbers1(){
  var y,x,z;
  a = document.getElementById("one1");
  b = document.getElementById("two1");
  c = document.getElementById("three1");
  d = document.getElementById("res1");


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
  
  if (e == 10) {
      document.getElementById("resulty21").style.display = "unset";
      document.getElementById("resulty11").style.display = "none";
      document.getElementById("divcool2").style.display = "unset";
    } else {
      document.getElementById("resulty11").style.display = "unset";
      document.getElementById("resulty21").style.display = "none";
      document.getElementById("divcool2").style.display = "none";
    }
}

function addNumbers2(){
  var y,x,z;
  a = document.getElementById("one2");
  b = document.getElementById("two2");
  c = document.getElementById("three2");
  d = document.getElementById("res2");


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
  
  if (e == 5) {
      document.getElementById("resulty22").style.display = "unset";
      document.getElementById("resulty12").style.display = "none";
    } else {
      document.getElementById("resulty12").style.display = "unset";
      document.getElementById("resulty22").style.display = "none";
    }
}
