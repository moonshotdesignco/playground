function makeHeadH() {
  var headSec = document.getElementById("header");
  var h = document.createElement("h1");
  h.id = "hExternal";
  h.className = "default big";
  headSec.appendChild(h);
}

function makeMainPara() {
  var mainSec = document.getElementById("main");
  var para = document.createElement("p");
  para.className = "pExternal default";
  mainSec.appendChild(para);
}  

function makeCopyPara() {
  var copySec = document.getElementById("copyright");
  var para = document.createElement("p");
  para.id = "copyExternal";
  para.className = "default small";
  copySec.appendChild(para);
}

document.onload = makeHeadH();
document.onload = makeMainPara();
document.onload = makeMainPara();
document.onload = makeMainPara();
document.onload = makeMainPara();
document.onload = makeCopyPara();

$("#hExternal").load("head.txt");
$(".pExternal").eq(0).load("main.txt");
$(".pExternal").eq(1).load("main-sub1.txt");
$(".pExternal").eq(2).load("main-sub2.txt");
$(".pExternal").eq(3).load("main-sub3.txt");
$("#copyExternal").load("copy.txt");