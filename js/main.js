$(document).ready(function() {
    
    $(".hambergBtn").click(function() {
        $(".collapseMenu").slideToggle();
        if ($("html").css("overflow") == "visible") {
            $("html").css("overflow", "hidden");
            $(".fa").removeClass("fa-bars");
            $(".fa").addClass("fa-close");
        } else {
            $("html").css("overflow", "visible");
            $(".fa").removeClass("fa-close");
            $(".fa").addClass("fa-bars");
        }
    });

    $(document).scroll(function () {
        var scroll_pos = $(this).scrollTop();
        if (scroll_pos > 10) {
            $("nav").css('background-color', 'rgb(100, 100, 100)');
        } else {
            $("nav").css('background-color', 'transparent');
        }
    });

});