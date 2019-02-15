$(".o").click(function() {
    window.close();
});
$(".br").click(function() {
    $(".hr").show();
});
$(".button").click(function() {
    $(".hs").show();
    $(".s").delay(8000).fadeIn();
});
$("h1").click(function() {
    $(".vv").slideDown();
    $("p").text("I'm going to make you wait, and wait, and make you bored.");
    $("button").text("I'm going to make you wait, and wait, and make you bored.");
    $(".vv").css("border","20px solid black");
    $(".cv").delay(9000).fadeIn();
});
$(".vv").click(function() {
    $(".vc").show();
    $(".vc").text("Now double click the button to progress further.");
});
$("button").dblclick(function() {
    $(".cv").hide();
    $(".vv").hide();
    $("button").hide();
    $("p").text("");
    $(".memes").show();
    $("body").css("background-color","red");
});