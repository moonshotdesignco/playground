function makeSection() {
  var s = document.createElement("section");
  document.body.insertAdjacentElement("afterbegin", s);
}

function makeHeadH() {
  var headSec = document.getElementById("header");
  var h = document.createElement("h1");
  h.id = "hExternal";
  h.className = "default big";
  headSec.appendChild(h);
}

function makeCopyPara() {
  var copySec = document.getElementById("copyright");
  var para = document.createElement("p");
  para.id = "copyExternal";
  para.className = "default small";
  copySec.appendChild(para);
}

document.onload = makeSection();
document.onload = makeSection();
document.onload = makeSection();

$("section").eq(0).attr("id", "header");
$("section").eq(1).attr("id", "main");
$("section").eq(2).attr("id", "copyright");

document.onload = makeHeadH();
document.onload = makeCopyPara();

$("#hExternal").load("head.txt");
$("#copyExternal").load("copy.txt");