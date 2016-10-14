$("#click").click(function() {
  $("#clicked").css({display: "inline"})
})


var bran = $("#nameinput")
console.log("hello")
bran.keydown(function(enter) 
  if (enter.keyCode == 13) {
    console.log("hi")
if (bran == "bran") {
  $("#branoutput").css({display: "inline"})
}
  }
})