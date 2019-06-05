function toggleOffOn(e) {
  e.preventDefault();
  var topNavBar = document.getElementById("toggle");
  if (e.target.parentNode.parentNode.classList.contains("toggleon")) {
    topNavBar.className = "top-navbar";
  } else {
    topNavBar.className += " toggleon";
  }
}

export default toggleOffOn;
