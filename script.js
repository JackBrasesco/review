$("#click").click(function() {
  $("#clicked").css({display: "inline"})
})


var bran = $("#nameinput")

bran.keydown(function(enter) {
  if (enter.keycode == 13) {
if (bran == "bran") {
  $("#branoutput").css({display: "inline"})
}
  }
})