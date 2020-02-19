function makeMainPara() {
  var mainSec = document.getElementById("main");
  var para = document.createElement("p");
  para.className = "pExternal default";
  mainSec.appendChild(para);
}

document.onload = makeMainPara();
document.onload = makeMainPara();

$(".pExternal").eq(0).load("main-sub2.txt");
$(".pExternal").eq(1).load("nav.html");