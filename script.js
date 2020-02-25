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

function goHome() {

  var cg = document.getElementsByClassName("gallery");
  for (cgi = 0; cgi < cg.length; cgi++) {
    cg[cgi].style.display = "none";
  }

  var cb = document.getElementsByClassName("navBtn");
  for (cbi = 0; cbi < cb.length; cbi++) {
    cb[cbi].classList.remove("active");
  }

  $("#dillonBlurb").show();

  document.getElementById("navHome").classList.add("active");
}

function sceneSwitch(e, artist) {
  document.getElementById("dillonBlurb").style.display = "none";

  // document.getElementsByClassName("galleryImage").style.display = "none";

  var cg = document.getElementsByClassName("gallery");
  for (cgi = 0; cgi < cg.length; cgi++) {
    cg[cgi].style.display = "none";
  }

  var cb = document.getElementsByClassName("navBtn");
  for (cbi = 0; cbi < cb.length; cbi++) {
    cb[cbi].classList.remove("active");
  }

  document.getElementById("gallery" + artist).style.display = "block";

  e.currentTarget.className += " active";
}
