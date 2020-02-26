document.addEventListener("touchstart", function() {}, false);

$("#hExternal").load("txt/head.txt");
$("#dillonBlurb").load("txt/dillon.txt");

function makeCopyPara() {
  var copySec = document.getElementById("copyright");
  var para = document.createElement("p");
  para.id = "copyExternal";
  para.className = "default small";
  copySec.appendChild(para);
}

document.onload = makeCopyPara();

$("#copyExternal").load("txt/copy.txt");

function hideGalleries() {
  var cg = document.getElementsByClassName("gallery");
  for (cgi = 0; cgi < cg.length; cgi++) {
    cg[cgi].classList.add("hidden");
  }
}

function navBtnRemoveActive() {
  var cb = document.getElementsByClassName("navBtn");
  for (cbi = 0; cbi < cb.length; cbi++) {
    cb[cbi].classList.remove("active");
  }
}

function galBtnRemoveActive() {
  var cb = document.getElementsByClassName("galleryBtn");
  for (cbi = 0; cbi < cb.length; cbi++) {
    cb[cbi].classList.remove("active");
  }
}

function goHome() {
  hideGalleries();

  navBtnRemoveActive();

  document.getElementById("navList").classList.add("hidden");

  document.getElementById("dillonBlurb").classList.remove("hidden");

  document.getElementById("navHome").classList.add("active");
}

function toggleGalleries() {
  document.getElementById("dillonBlurb").classList.add("hidden");

  document.getElementById("navHome").classList.remove("active");

  document.getElementById("navList").classList.remove("hidden");

  hideGalleries();

  navBtnRemoveActive();

  document.getElementById("navGalleries").classList.add("active");
}

function sceneSwitch(e, artist) {
  document.getElementById("dillonBlurb").classList.add("hidden");

  hideGalleries();

  galBtnRemoveActive();

  document.getElementById("gallery" + artist).classList.remove("hidden");

  e.currentTarget.className += " active";
}
