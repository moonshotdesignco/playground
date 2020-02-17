var d = new Date();
var copyYear = d.getFullYear();

var headSecText = "head.txt";
var mainSecText = "main.txt"
var copySecText = "copy.txt";

var headSec = document.getElementById("header");
var h = document.createElement("h1");
h.innerText = headSecText;
h.className = "default big";
headSec.appendChild(h);

var mainSec = document.getElementById("main");
var para = document.createElement("p");
para.innerText = mainSecText;
para.className = "default";
mainSec.appendChild(para);

var copySec = document.getElementById("copyright");
copySec.innerText = copySecText;
copySec.className = "default small";