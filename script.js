$("#click").click(function() {
  $("#clicked").css({display: "inline"})
})


var bran = $("#nameinput")

bran.keydown(function(enter) {
  if (enter.keyCode == 13) {
      if (bran.val() == "bran") {
          $("#branoutput").css({display: "inline"})
          bran.val("")
      }
  }
})

var list = ["this","is","a","list"]

function callme(callme) {
  callme()
  co
}