(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

})(jQuery); // End of use strict

/* propio */
/**
 * Hide the URL address bar on standard Android's browser by setting enough
 * document height and auto scrolling to active the bar hiding feature
 */

function hideAddressBar()
{
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight + 10)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout(function()
      {
        window.scrollTo(0, 1);
      }, 50);
  }
}

/**
 * Start up procedure to hide the Android's URL bar
 */

window.addEventListener("load", function()
{

    if(!window.pageYOffset)
    {
        hideAddressBar();
    }

    window.addEventListener("orientationchange", hideAddressBar);

});