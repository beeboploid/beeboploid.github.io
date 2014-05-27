window.onload = function (){
    
    $("#submit").click(function(){
    var name = $("#writerName").val();
    $(".writerNameHere").append(name);
    $("#container1").toggle();
    $("#container2").toggle();
});

$("#container2").hide();

$("#submit2").click(function(){
    var phrase1 = $("#phrase1").val();
    $("#phrase1here").append(phrase1);
    var phrase2 = $("#phrase2").val();
    $("#phrase2here").append(phrase2);
    var phrase3 = $("#phrase3").val();
    $("#phrase3here").append(phrase3);
    var phrase4 = $("#phrase4").val();
    $("#phrase4here").append(phrase4);
    $("#container2").toggle();
    $("#container3").toggle();
});

$("#container3").hide();

};