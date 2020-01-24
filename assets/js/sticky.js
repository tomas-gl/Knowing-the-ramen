window.onscroll = function() {windowScroll()};

const navbar = document.getElementById("menu");
const sticky = navbar.offsetTop;
const tab = document.getElementsByClassName('tab');


function windowScroll() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      var i;
      for (i=0; i < tab.length;i++){
      tab[i].style.backgroundColor = "rgba(200,70,70,0.8)";
    }
    } else {
      navbar.classList.remove("sticky");
      var i;
      for (i=0; i < tab.length;i++){
      tab[i].style.backgroundColor = "";
    }
    }
}
