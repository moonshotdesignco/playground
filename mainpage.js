var i;
var paraCount = 3;
for (i = 1; i <= paraCount; i++) {
  makeMainPara();
}

$(".pExternal").eq(0).load("main.txt");
$(".pExternal").eq(1).load("main-sub1.txt");
$(".pExternal").eq(2).load("test.html");