  const infolangages = document.getElementsByClassName('infolangages')[0];

function getMoreInfo(){

  var infobutton = document.getElementsByClassName('infobutton')[0];

      infobutton.addEventListener("click", function() {
        infolangages.innerHTML = 'baazbzaebezabezab <button class="reducebutton" onclick="CloseInfo()"<span>Fermer</span></button>';
        infolangages.setAttribute("style", "padding-top: 30px; font-size: 15px; text-align: center;");
      });
    };

getMoreInfo();


function CloseInfo (){

  var closebutton = document.getElementsByClassName('reducebutton')[0];

    if(closebutton)
      closebutton.addEventListener("click", function() {
            infolangages.style.display = "none";
        })
      };

CloseInfo();
