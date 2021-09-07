
// Preloader
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/* =============================
         Progress Bars
============================= */ 
$(function () {
  $("#skills h4").first().waypoint(function() {
   $(".progress-bar").each(function() {
     $(this).animate({width: $(this).attr("aria-valuenow") + "%"
     }, 1000);
   });
     this.destroy();
  }, { offset: '20' 
 });
});

/* =============================
         Experiences
============================= */ 
$(function() {
  $("#experience-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true, 
    nav: true,
    dots: false,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
  });
});

/* =============================
          Portfolio
============================= */ 
$(window).on('load', function () {
  // Initialize Isotope
  $(".isotope-container").isotope({
  });

  // filter items on button click
  $("#isotope-filters").on('click', 'button', function() {
    // get filter value
    const filterValue = $(this).attr('data-filter');
      // filter  portfolio
      $(".isotope-container").isotope({
        filter: filterValue
      });

      // active button 
      $("#isotope-filters").find('.active').removeClass('active');
      $(this).addClass('active');
  });
});

/* =============================
          Magnifier
============================= */ 
$(function () {
  $(".portfolio-img").magnificPopup({
    type: 'image',
    gallery: {
      enabled: true 
    }
  });
});


/* =============================
          Navigation
============================= */
// Show & Hide White Navigation
$(function () {
  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function(){
     // show/hide nav on window's scroll
    showHideNav();
  });


  function showHideNav() {
    if($(window).scrollTop() > 50) {
      // Show white navigation bar
      $("nav").addClass("white-nav-top");

      // Show dark logo
      $(".navbar-brand img").attr("src", "img/logo_black.png");

      // Show back to top button
      $("#back-to-top").fadeIn();

      $(".navbar-toggler").css("color", "#fff");

    } else {
       // Hide white navigation bar
      $("nav").removeClass("white-nav-top");

        // Show logo
      $(".navbar-brand img").attr("src", "img/logo_white.png");

      // Hide back to top button
      $("#back-to-top").fadeOut();

      $(".navbar-toggler").css("color", "#000");
    }
  }
});

// Smooth Scrolling
$(function () {
  $("a.smooth-scroll").on('click', function (e) {
    e.preventDefault();

    // Get section id like #about, #services, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section_id).offset().top
    }, 1250);
  });
})

/* =============================
          Mobile Menu
============================= */
$(function () {
  // Show Mobile View
  $("#mobile-nav-open-btn").on("click", function () {
    $(".mobile-nav").css("height", "100%");
  });

  $("#mobile-nav-close-btn, .navbar-nav a").on("click", function () {
    $(".mobile-nav").css("height", "0%");
  });

});


/* =============================
            Plyr
============================= */;
$(window).on('load', function () {
  const player = new Plyr('#player');
});

/* =============================
          Animation
============================= */
$(function () {

  new WOW().init()

});


$(window).on('load', function () {
$(".home-cover-content p:first-of-type").addClass("animate__animated animate__fadeInDown");
$(".home-cover-content h4").addClass("animate__animated animate__fadeInLeft");
$(".home-cover-content p:last-of-type").addClass("animate__animated animate__zoomIn");
$(".home-cover-content a").addClass("animate__animated animate__zoomIn");
$("#home-heading").addClass("animate__animated animate__zoomIn");
});
