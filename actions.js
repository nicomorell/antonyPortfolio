
// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});



(function($) {
    "use strict";

    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    function offsetAnchor() {
        if (location.hash.length !== 0) {
            window.scrollTo(window.scrollX, window.scrollY - 100);
        }
    }

    $(document).on('click', 'a[href^="#"]', function(event) {
        window.setTimeout(function() {
            offsetAnchor();
        }, 0);
    });

    window.setTimeout(offsetAnchor, 0);
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            console.log("TEST");
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();

    $(window).scroll(navbarCollapse);

    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    var triggeredFunction = function() {
        var s = document.createElement("script");
        s.setAttribute("src", "https://nthitz.github.io/turndownforwhatjs/tdfw.js");
        document.body.appendChild(s);
    };

    var clickCount = 0;
    var triggered = false;
    var timestamp = 0;

    $('#profile_pic').click(function() {
        if (new Date().getTime() - timestamp < 500) {
            clickCount++;
        } else {
            clickCount = 1;
        }
        timestamp = new Date().getTime();
        if (clickCount >= 5 && !triggered) {
            triggered = true;
            triggeredFunction();
        }
    });

    $('ul.navbar-nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
    });

})(jQuery);