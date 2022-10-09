function toggleSiteMapVisibility() {
  var x = document.getElementById("siteMap");
  var text = document.getElementById("siteMapToggleButton");
  if (x.style.display === "none") {
    x.style.display = "block";
    text.innerHTML = 'Ver mas  <span>&#8743;</span>';
  } 
  else {
    x.style.display = "none";
    text.innerHTML = 'Ver mas  <span>&#8744;</span>';
  }
}

function SubscribeButtonClick() {
    alert("Te has suscrito!");
}