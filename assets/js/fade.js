const vignette_c = document.getElementsByClassName('vignette_c');
const vignette_p = document.getElementsByClassName('vignette_p');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');

b1.classList.add("red");

function chintan(){

var i;

for (var i=0; i< vignette_p.length; i++){
  vignette_p[i].style.display = "none";
  }

for (var i=0; i< vignette_c.length; i++){
    vignette_c[i].style.display = "inline-table";
    }

    b1.classList.add("red");
    b2.classList.remove("red");
    b3.classList.remove("red");
}


function paitan(){

var i;

for (var i=0; i< vignette_c.length; i++){
    vignette_c[i].style.display = "none";
    }

for (var i=0; i< vignette_p.length; i++){
      vignette_p[i].style.display = "inline-table";
    }

    b1.classList.remove("red");
    b2.classList.add("red");
    b3.classList.remove("red");
}
