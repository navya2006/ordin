 // color changing navbar
 jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 50) {
        $(".navb").css("background-color","#000");
    } else {
        $(".navb").css("background-color","transparent");
    }
}); 