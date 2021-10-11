$(document).ready(function() {
    // ? Loader Action
    $('.loader').fadeOut(1000);
    $('nav, main, footer').fadeIn(2500);
    
    // ? Smooth scroll to scetions
    $('body').position({ top: 1000 });
    $('a').click(function(e) {
        e.preventDefault();
        var toScroll = $(this).data('toscroll');
        $(document).scrollTop($('#'+toScroll).offset().top);
        $('.active').removeClass('active');
        $(this).addClass('active');
        // ? Close menu after link click
        if ($('.hambergBtn').css('display') == 'block') {
            $('.hambergBtn').click();
        }
    });
    
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

    // ? Navbar change color on scroll.
    $(document).scroll(function () {
        var scroll_pos = $(this).scrollTop();
        if (scroll_pos > 50) {
            $("nav").css('background-color', 'rgba(180, 180, 180, 0.99)');
        } else {
            $("nav").css('background-color', 'transparent');
        }
    });
});

// ? Carousal JS Code
var x = $('.carousal').css('left');
var imgN = $('.carousal img').length - 1;
$('.carousal').css('width', (((imgN + 1) * 150) + "px"));
var start = 0;
var timeChange = 3000;

setInterval(function () {
    if (start == 1) {
        carousalNext();
    }
}, timeChange);

function carousalNext() {
    start = 1;
    x = ((parseInt(x.replace(/px/, "")) - 150));
    if (x < -(imgN * 150)) {
        x = 0;
    }
    x = x + "px";
    $('.carousal').animate({ left: x });
}
function carousalPrev() {
    start = 1;
    x = ((parseInt(x.replace(/px/, "")) + 150));
    if (x > 0) {
        x = -(imgN * 150);
    }
    x = x + 'px';
    $('.carousal').animate({ left: x });
}