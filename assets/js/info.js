function moreInfo(){

  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var button = document.getElementById("myBtn");

  if (dots.style.display === "none"){
    dots.style.display = "inline";
    more.style.display = "none";
    button.innerHTML = "Afficher plus";
  }else {
    dots.style.display = "none";
    more.style.display = "inline";
    button.innerHTML = "Afficher moins";
  }
}
