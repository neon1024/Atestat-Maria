$(document).ready(function() {
    $(".location__div > img").click(function() {
        $(".location-showcase").empty();

        img_src = $(this).attr("src");

        $(".location-showcase").append('<img class="location-showcase__img" src=' + img_src + ">");
    });
});