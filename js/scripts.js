/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict



    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    /* Progressbar-1*/
    $(document).ready(function () {
      $('#sample_goal_1').goalProgress({
        goalAmount: 100,
        currentAmount: 100,
        textBefore: '% ',
        textAfter: ' - PHOTOSHOP'
      });
    });

    /* Progressbar-2*/
    $(document).ready(function () {
      $('#sample_goal_2').goalProgress({
        goalAmount: 100,
        currentAmount: 100,
        textBefore: '% ',
        textAfter: ' - ILLUSTRATOR'
      });
    });

    /*Progressbar-3*/
    $(document).ready(function () {
      $('#sample_goal_3').goalProgress({
        goalAmount: 100,
        currentAmount: 100,
        textBefore: '% ',
        textAfter: ' - HTML'
      });
    });

    /*Progressbar-4*/
    $(document).ready(function () {
      $('#sample_goal_4').goalProgress({
        goalAmount: 100,
        currentAmount: 90,
        textBefore: '% ',
        textAfter: ' - CSS'
      });
    });

    /*Progressbar-5*/
    $(document).ready(function () {
      $('#sample_goal_5').goalProgress({
        goalAmount: 100,
        currentAmount: 75,
        textBefore: '% ',
        textAfter: ' - BOOTSTRIP'
      });
    });

    /* Progressbar-6 */
    $(document).ready(function () {
      $('#sample_goal_6').goalProgress({
        goalAmount: 100,
        currentAmount: 65,
        textBefore: '% ',
        textAfter: ' - JAVASCRIPT'
      });
    });

    /*Progressbar-7 */
    $(document).ready(function () {
      $('#sample_goal_7').goalProgress({
        goalAmount: 100,
        currentAmount: 60,
        textBefore: '% ',
        textAfter: ' - JQUERY'
      });
    });

    /*Progressbar-8 */
    $(document).ready(function () {
      $('#sample_goal_8').goalProgress({
        goalAmount: 100,
        currentAmount: 55,
        textBefore: '% ',
        textAfter: ' - PHP'
      });
    });

    /* Progressbar-9 */
    $(document).ready(function () {
      $('#sample_goal_9').goalProgress({
        goalAmount: 100,
        currentAmount: 45,
        textBefore: '% ',
        textAfter: ' - LARAVEL'
      });
    });


    !function($){
      $.fn.extend({
        goalProgress: function(options) {
          var defaults = {
            goalAmount: 100,
            currentAmount: 50,
            speed: 8000,
            textBefore: '',
            textAfter: '',
            milestoneNumber: 70,
            milestoneClass: 'almost-full',
            callback: function() {}
          }

          var options = $.extend(defaults, options);
          return this.each(function(){
            var obj = $(this);

        // Collect and sanitize user input
        var goalAmountParsed = parseInt(defaults.goalAmount);
        var currentAmountParsed = parseInt(defaults.currentAmount);

        // Calculate size of the progress bar
        var percentage = (currentAmountParsed / goalAmountParsed) * 100;

        var milestoneNumberClass = (percentage > defaults.milestoneNumber) ? ' ' + defaults.milestoneClass : ''

        // Generate the HTML
        var progressBar = '<div class="progressBar">' + defaults.textBefore + currentAmountParsed + defaults.textAfter + '</div>';

        var progressBarWrapped = '<div class="goalProgress' + milestoneNumberClass + '">' + progressBar + '</div>';

        // Append to the target
        obj.append(progressBarWrapped);

        // Ready
        var rendered = obj.find('div.progressBar');

        // Remove Spaces
        rendered.each(function() {
          $(this).html($(this).text().replace(/\s/g, '&nbsp;'));
        });

        // Animate!
        rendered.animate({width: percentage +'%'}, defaults.speed, defaults.callback);

        if(typeof callback == 'function') {
          callback.call(this)
        }
      });
        }
      });
    }(window.jQuery);

    /*  end Progressbar */



// Text Animation
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
.add({
  targets: '.ml4 .letters-1',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  duration: ml4.durationIn
}).add({
  targets: '.ml4 .letters-1',
  opacity: 0,
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  delay: ml4.delay
}).add({
  targets: '.ml4 .letters-2',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  duration: ml4.durationIn
}).add({
  targets: '.ml4 .letters-2',
  opacity: 0,
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  delay: ml4.delay
}).add({
  targets: '.ml4 .letters-3',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  duration: ml4.durationIn
}).add({
  targets: '.ml4 .letters-3',
  opacity: 0,
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  delay: ml4.delay
}).add({
  targets: '.ml4',
  opacity: 0,
  duration: 500,
  delay: 500
    }); // end Text Animation




    // welcome Text Animation
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.ml10 .letter',
  rotateY: [-90, 0],
  duration: 1300,
  delay: (el, i) => 45 * i
}).add({
  targets: '.ml10',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});
  //end welcome Text Animation



    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });

  })(jQuery);  // Text Animation



  