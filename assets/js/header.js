function changeOpacity(){

  var header = document.getElementById('titre_header');
  var el = header.parentNode;

  header.addEventListener("mouseover", function() {
    el.style.opacity = "0.5";
    el.style.transition = "1s";

});

  header.addEventListener("mouseleave", function(){
    el.style.opacity = "1";
    el.style.transition = "1s";
  });
};
changeOpacity();
