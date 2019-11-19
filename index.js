$("button").on("click", function(){
  var input = $("#sign-up").val();
  var atSign = input.indexOf("@");
  var domain = input.slice(atSign,input.length).indexOf(".");

  if(atSign===-1 || atSign===0){
    $("#err-icon").fadeIn();
    $("#errMsg").fadeIn();
  }else if(domain ===-1 ||domain===0){
    $("#err-icon").fadeIn();
    $("#errMsg").fadeIn();
  }
});

$("#sign-up").on("blur", function(){
  if($("#sign-up").val() === ""){
    $("#err-icon").fadeOut();
    $("#errMsg").fadeOut();
  }
})
