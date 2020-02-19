function makeMainPara() {
  var mainSec = document.getElementById("main");
  var para = document.createElement("p");
  para.className = "pExternal default";
  mainSec.appendChild(para);
}

document.onload = makeMainPara();
document.onload = makeMainPara();

var imgPara = document.getElementsByClassName("pExternal")[0];
imgPara.id = "gallery";

function makeImg() {
  var newImg = document.createElement("img");
  newImg.className = "page2image";
  document.getElementById("gallery").appendChild(newImg);
}

document.onload = makeImg();
document.onload = makeImg();
document.onload = makeImg();
document.onload = makeImg();
document.onload = makeImg();

$(".page2image").eq(0).attr("src", "01.jpg");
$(".page2image").eq(1).attr("src", "02.jpg");
$(".page2image").eq(2).attr("src", "03.jpg");
$(".page2image").eq(3).attr("src", "04.jpg");
$(".page2image").eq(4).attr("src", "05.jpg");

$(".pExternal").eq(1).load("nav.html");