var coll = document.getElementsByClassName("recette");
var i;


for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    var vignette = this.parentNode;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      if (content.style.maxHeight = null){
      content.style.borderBottom = "0px solid";
      vignette.style.borderBottom = "3px solid";
    }
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.borderBottom = "3px solid";
      vignette.style.borderBottom = "0px solid";
    }
  });
}
