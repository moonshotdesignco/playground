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

function makeNavPara() {
  var navSec = document.getElementById("nav");
  var para = document.createElement("p");
  para.id = "navExternal";
  para.className = "default";
  navSec.appendChild(para);
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

var i;
var secCount = 4;
for (i = 1; i <= secCount; i++) {
  makeSection();
}

$("section").eq(0).attr("id", "header");
$("section").eq(1).attr("id", "nav");
$("section").eq(2).attr("id", "main");
$("section").eq(3).attr("id", "copyright");

document.onload = makeHeadH();
document.onload = makeNavPara();
document.onload = makeCopyPara();

$("#hExternal").load("txt/head.txt");
$("#navExternal").load("txt/nav.txt");
$("#copyExternal").load("txt/copy.txt");

document.onload = mainPage();

function sceneSwitch() {
  var c = document.getElementsByClassName("pExternal");
  for (ch = 0; ch < c.length;) {
    c[ch].remove();
  }
}

function mainPage() {
  var i;
  var paraCount = 3;
  for (i = 1; i <= paraCount; i++) {
    makeMainPara();
  }

  $(".pExternal").eq(0).load("txt/test.txt");
  $(".pExternal").eq(1).load("txt/main.txt");
  $(".pExternal").eq(2).load("txt/main-sub1.txt");
}

function page2() {
  var i;
  var paraCount = 1;
  for (i = 1; i <= paraCount; i++) {
    makeMainPara();
  }

  var imgPara = document.getElementsByClassName("pExternal")[0];
  imgPara.id = "gallery";

  function makeImg() {
    var newImg = document.createElement("img");
    newImg.className = "page2image";
    document.getElementById("gallery").appendChild(newImg);
  }

  var i;
  var galleryCount = 5;
  for (i = 1; i <= galleryCount; i++) {
    makeImg();
  }

  var imgArray = document.getElementsByClassName("page2image");
  var n;
  for (n = 0; n < imgArray.length; n++) {
    imgArray[n].setAttribute("src", "img/" + (n + 1) + ".jpg");
  }
}

function page3() {
  makeMainPara();
  $(".pExternal").eq(0).load("txt/main-sub2.txt");
}

function page4() {
  var i;
  var paraCount = 1;
  for (i = 1; i <= paraCount; i++) {
    makeMainPara();
  }

  $(".pExternal").eq(0).load("txt/main-sub3.txt");
}

function lastPage() {
  var paraCount = 1;
  for (i = 1; i <= paraCount; i++) {
    makeMainPara();
  }
  
  $(".pExternal").eq(0).load("txt/lastpage.txt");
}
