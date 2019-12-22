scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

  var first_tab = document.getElementById("first_tab");
  var second_tab = document.getElementById("second_tab");

first_tab.addEventListener('click', () => {
  scrollTo(document.getElementById("first_banner"));
});

second_tab.addEventListener('click', () => {
  scrollTo(document.getElementById("second_banner"));
});
