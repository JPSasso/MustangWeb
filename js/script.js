
function getRandomMustang()
{    
  var rnd = Math.floor(Math.random() * 6);
  while(localStorage.getItem("RandomMustang") === rnd){
    rnd = Math.floor(Math.random() * 6);
  }
  let cookie = rnd.toString();
  console.log(cookie);
  localStorage.setItem("RandomMustang",cookie);
  let rndMustang = GetMustang(rnd);
  console.log(rndMustang);
  document.getElementById("historyImg").src = rndMustang.Img1;
  var audio = document.getElementById("rndMustangSound");
  audio.src = rndMustang.sound;
  audio.load();
  document.getElementById("p-model").innerHTML = "Mustang modelo " + rndMustang.Year;
}

function GetMustang(car)
{
  switch(car){
    case 0:
      return Mustang1;
    case 1:
      return Mustang2;
    case 2:
      return Mustang3;
    case 3:
      return Mustang4;
    case 4:
      return Mustang5;
    case 5:
      return Mustang6;
  }
}

function toggleSiteMapVisibility() {
  var x = document.getElementById("siteMap");
  var text = document.getElementById("siteMapToggleButton");
  if (x.style.display === "none") {
    x.style.display = "block";
    text.innerHTML = 'Ver menos  <span>&#8743;</span>';
  } 
  else {
    x.style.display = "none";
    text.innerHTML = 'Ver mas  <span>&#8744;</span>';
  }
}

function SubscribeButtonClick() {
    alert("Te has suscrito!");
}

function gotoHistory()
{
  console.log(localStorage.getItem("RandomMustang"));
  localStorage.setItem("manualReload",0);
  window.location.href='history.html';
}