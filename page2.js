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
  imgArray[n].setAttribute("src", n + 1 + ".jpg");
}