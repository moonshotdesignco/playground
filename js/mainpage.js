var i;
var paraCount = 3;
for (i = 1; i <= paraCount; i++) {
  makeMainPara();
}

$(".pExternal").eq(0).load("txt/test.txt");
$(".pExternal").eq(1).load("txt/main.txt");
$(".pExternal").eq(2).load("txt/main-sub1.txt");