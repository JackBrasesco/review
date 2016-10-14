$("#click").click(function() {
  $("#clicked").css({display: "inline"})
})


var bran = $("#nameinput")

bran.keydown(function(enter) {
  if (enter.keyCode == 13) {
    console.log(bran)
      if (bran == "bran") {
          $("#branoutput").css({display: "inline"})
      }
  }
})
