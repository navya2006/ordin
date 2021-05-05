 // color changing navbar
 jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 100) {
        $(".navb").css("background-color","rgba(0,0,0,0.6)");
    } else {
        $(".navb").css("background-color","transparent");
    }
}); 