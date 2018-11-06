$(function () {
    $(".nav-tab").on("click", function () {
        $(this).addClass("nav-tab-cur").siblings().removeClass("nav-tab-cur");
        var index = $(this).index();
        $(".bd-item").eq(index).show().siblings().hide();
    });

});