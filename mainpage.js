function makeMainPara() {
  var mainSec = document.getElementById("main");
  var para = document.createElement("p");
  para.className = "pExternal default";
  mainSec.appendChild(para);
}

document.onload = makeMainPara();
document.onload = makeMainPara();
document.onload = makeMainPara();
document.onload = makeMainPara();
document.onload = makeMainPara();

$(".pExternal").eq(0).load("main.txt");
$(".pExternal").eq(1).load("main-sub1.txt");
$(".pExternal").eq(2).load("test.html");
$(".pExternal").eq(3).load("nav.html");


// replace this navigation with one constructed via for loop
var paraCount = document.getElementsByClassName("pExternal").length;
var lastPara = paraCount - 1;
var navPara = document.getElementsByClassName("pExternal")[lastPara];
var newLink = document.createElement("a");
newLink.id = "nextpage";
var navLink = navPara.appendChild(newLink);
navLink.innerText = "Page 2";
navLink.href = "page2.html";