$(document).ready(function () {
    $("#black_theme_button").click(function () {
        $("body").removeClass();
        $("body").addClass("black_background");
    });
});

$("#red_theme_button").click(function () {
    $("body").removeClass();
    $("body").addClass("red_background");
});

$("#green_theme_button").click(function () {
    $("body").removeClass();
    $("body").addClass("green_background");
});