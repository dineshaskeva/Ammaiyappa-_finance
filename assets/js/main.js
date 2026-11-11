// ==================================================
// * Project Name   :  Chatbot - Creative Agency HTML5 Template
// * File           :  JS Base
// * Version        :  1.0.1
// * Last change    :  5 May 2023, Saturday
// * Author         :  BDevs (https://themeforest.net/user/bdevs)
// ==================================================

(function ($) {
  "use strict";

  // Preloader - Start
  // --------------------------------------------------
  $(window).on('load', function (event) {
    $('#preloader').delay(500).fadeOut(500);
  });
  // Preloader - End
  // --------------------------------------------------

  // carousel - Start
  // --------------------------------------------------
  var bd_rtl = localStorage.getItem('bd_dir');
  let rtl_setting = bd_rtl == 'rtl' ? true : false;
  // carousel - End
  // --------------------------------------------------


  // Back To Top - Start
  // --------------------------------------------------
  $(function () {
    $(".scroll").on('click', function () {
      $("html,body").animate({ scrollTop: 0 }, "slow");
      return false
    });
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.backtotop.position-fixed:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop.position-fixed').stop(true, true).fadeOut();
    }
  });
  // Back To Top - End
  // --------------------------------------------------

  // OffCanvas - Start
  // --------------------------------------------------
  function closeOffcanvas() {
    $(".offcanvas__info").removeClass("info-open");
    $(".offcanvas__overlay").removeClass("overlay-open");
    $("body").removeClass("offcanvas-active");
  }

  function openOffcanvas() {
    $(".offcanvas__info").addClass("info-open");
    $(".offcanvas__overlay").addClass("overlay-open");
    $("body").addClass("offcanvas-active");
  }

  $(".offcanvas-toggle").on("click", function (e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if ($(".offcanvas__info").hasClass("info-open")) {
      closeOffcanvas();
    } else {
      openOffcanvas();
    }
  });

  $(".offcanvas__close, .offcanvas__overlay, .af_mobile_close_btn").on("click", function (e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    closeOffcanvas();
  });

  // Close offcanvas & smooth scroll when any link inside mobile-menu is clicked
  $(document).on("click", ".mobile-menu a, .offcanvas__info a", function (e) {
    var href = $(this).attr("href");
    if (href && href.startsWith("#") && href.length > 1) {
      var $target = $(href);
      if ($target.length) {
        if (e) e.preventDefault();
        closeOffcanvas();
        $("html, body").stop().animate({
          scrollTop: $target.offset().top - 70
        }, 500);
        return;
      }
    }
    closeOffcanvas();
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && $(".offcanvas__info").hasClass("info-open")) {
      closeOffcanvas();
    }
  });
  // OffCanvas - End
  // --------------------------------------------------

  // sticky header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('.site_header').addClass("sticky")
    } else {
      $('.site_header').removeClass("sticky")
    }
  });
  // sticky header - end
  // --------------------------------------------------

  // Select - Start
  // --------------------------------------------------
  $('select').niceSelect();

  // Select - End
  // --------------------------------------------------

  // 	Data Css - Start
  // --------------------------------------------------
  $("[data-background").each(function () {
    $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
  });

  $("[data-width]").each(function () {
    $(this).css("width", $(this).attr("data-width"));
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });
  // 	Data Css - End
  // --------------------------------------------------

  // 	Mobile Menu - Start
  // --------------------------------------------------
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });
  // Mobile Menu - End
  // --------------------------------------------------

  // wow js - start
  // --------------------------------------------------
  var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 1000,
  });
  wow.init();
  // wow js - end
  // --------------------------------------------------

  // Tilt - Start
  // --------------------------------------------------
  $('.tilt').tilt({
    maxTilt: 12,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    glare: false,
    maxGlare: 1
  });

  // Tilt - End
  // --------------------------------------------------
  // Mouse Move Parallax - Start
  // --------------------------------------------------
  $('.mouse_move').parallax({
    scalarX: 10.0,
    scalarY: 10.0,
  });
  // Mouse Move Parallax - End
  // --------------------------------------------------

  // Multy Countdown - Start
  // --------------------------------------------------
  $('.countdown_timer').each(function () {
    $('[data-countdown]').each(function () {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
        var $this = $(this).html(event.strftime(''
          + '<li class="days_count"><div><strong>%D</strong><span>Days</span></div></li>'
          + '<li class="hours_count"><div><strong>%H</strong><span>Hours</span></div></li>'
          + '<li class="minutes_count"><div><strong>%M</strong><span>Mins</span></div></li>'
          + '<li class="seconds_count"><div><strong>%S</strong><span>Secs</span></div></li>'));
      });
    });
  });
  // Multy Countdown - End
  // --------------------------------------------------

  // Videos & Images popup - Start
  // --------------------------------------------------
  $('.popup_video').magnificPopup({
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });

  $('.zoom-gallery').magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function (element) {
        return element.find('img');
      }
    }

  });
  // Videos & Images popup - End
  // --------------------------------------------------

  // Odometer Counter - Start
  // --------------------------------------------------
  jQuery('.odometer').appear(function (e) {
    var odo = jQuery(".odometer");
    odo.each(function () {
      var countNumber = jQuery(this).attr("data-count");
      jQuery(this).html(countNumber);
    });
  });
  // Odometer Counter - End
  // --------------------------------------------------

  // Isotope Filter - Start
  // --------------------------------------------------
  // init Isotope
  $(".portfolio-active").imagesLoaded(function () {
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      itemSelector: ".element-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
      },
    });

    // filter items on button click
    $(".portfolio-active").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".masonary-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  // Isotope Filter - End
  // --------------------------------------------------

  // masoney grid layout - Start
  // --------------------------------------------------
  $(".grid").imagesLoaded(function () {
    var $grid = $(".grid").isotope({
      // options
      layoutMode: "fitRows",
    });
    // filter items on button click
    $(".portfolio_button").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $(".portfolio_button button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  // masoney grid layout - Start
  // --------------------------------------------------
  var $masoney = $('.masoney-grid').imagesLoaded(function () {
    $masoney.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    });
  });
  // masoney grid layout - End

  // --------------------------------------------------


  // Common Carousels - Start
  // --------------------------------------------------
  $('.common_carousel_1col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    prevArrow: ".cc1c_left_arrow",
    nextArrow: ".cc1c_right_arrow"
  });

  $('.common_carousel_2col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    rtl: rtl_setting,
    prevArrow: ".cc2c_left_arrow",
    nextArrow: ".cc2c_right_arrow",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  $('.common_carousel_3col').slick({
    dots: true,
    speed: 800,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: rtl_setting,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ]
  });

  $('.common_carousel_4col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    rtl: rtl_setting,
    prevArrow: ".cc4c_left_arrow",
    nextArrow: ".cc4c_right_arrow",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  $('.common_carousel_centered').slick({
    dots: true,
    speed: 700,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplaySpeed: 3500,
    rtl: rtl_setting,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  });

  // Direct dot click navigation: clicking any circle immediately goes to that card
  $(document).on('click', '.gallery_section .slick-dots li', function () {
    var idx = $(this).index();
    $('.common_carousel_centered').slick('slickGoTo', idx);
  });

  $(document).on('click', '.services_carousel .slick-dots li', function () {
    var idx = $(this).index();
    $('.common_carousel_3col').slick('slickGoTo', idx);
  });

  // Gallery image click -> show letter & active border
  $('.gallery_section').on('click', '.portfolio_item', function (e) {
    var $item = $(this);
    if ($item.hasClass('active-letter')) {
      $item.removeClass('active-letter');
    } else {
      $('.gallery_section .portfolio_item').removeClass('active-letter');
      $item.addClass('active-letter');
    }
  });

  $('.common_carousel_centered_2').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    rtl: rtl_setting,
    prevArrow: ".ccc2_left_arrow",
    nextArrow: ".ccc2_right_arrow",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  });
  // Common Carousels - End
  // --------------------------------------------------

  // History Carousel - Start
  // --------------------------------------------------
  $('.history_carousel').slick({
    speed: 10000,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: false,
    rtl: rtl_setting,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  // History Carousel - End
  // --------------------------------------------------

})(jQuery);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#' || href.length < 2) return;

    try {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });

        // Close mobile offcanvas if open
        const offcanvas = document.querySelector('.offcanvas__info');
        const overlay = document.querySelector('.offcanvas__overlay');
        if (offcanvas) offcanvas.classList.remove('info-open');
        if (overlay) overlay.classList.remove('overlay-open');
        document.body.classList.remove('offcanvas-active');
      }
    } catch (err) {
      // Ignore invalid query selectors
    }
  });
});

window.addEventListener('load', function () {
  setTimeout(function () {
    document.body.classList.add('loaded');
  }, 5000); // Delay for 3 seconds
});

function openTermsModal() {
  var modal = document.getElementById("termsModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeTermsModal() {
  var modal = document.getElementById("termsModal");
  if (modal) {
    modal.classList.remove("active");
  }
  var pModal = document.getElementById("privacyModal");
  if (!pModal || !pModal.classList.contains("active")) {
    document.body.style.overflow = "";
  }
}

function closeModal() {
  closeTermsModal();
}

function openPrivacyModals() {
  var modal = document.getElementById("privacyModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function openPrivacyModal() {
  openPrivacyModals();
}

function closePrivacyModal() {
  var modal = document.getElementById("privacyModal");
  if (modal) {
    modal.classList.remove("active");
  }
  var tModal = document.getElementById("termsModal");
  if (!tModal || !tModal.classList.contains("active")) {
    document.body.style.overflow = "";
  }
}

function closeModals() {
  closePrivacyModal();
}

window.addEventListener("click", function (event) {
  var terms = document.getElementById("termsModal");
  var privacy = document.getElementById("privacyModal");
  if (event.target === terms) {
    closeTermsModal();
  }
  if (event.target === privacy) {
    closePrivacyModal();
  }
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeTermsModal();
    closePrivacyModal();
  }
});

// ==========================================================================
// Contact Enquiry Form - Submit & Send to ammaiyappaconsulting@gmail.com
// With tick icon success notification
// ==========================================================================
// function handleEnquiryFormSubmit(event) {
//   if (event && event.preventDefault) {
//     event.preventDefault();
//   }

//   var firstNameEl = document.getElementById("enquiry_firstname");
//   var lastNameEl = document.getElementById("enquiry_lastname");
//   var emailEl = document.getElementById("enquiry_email");
//   var subjectEl = document.getElementById("enquiry_subject");
//   var messageEl = document.getElementById("enquiry_message");
//   var statusDiv = document.getElementById("enquiryFormStatus");
//   var submitBtn = document.getElementById("enquiry_submit_btn");

//   var firstName = firstNameEl ? firstNameEl.value.trim() : "";
//   var lastName = lastNameEl ? lastNameEl.value.trim() : "";
//   var email = emailEl ? emailEl.value.trim() : "";
//   var subject = subjectEl ? subjectEl.value.trim() : "";
//   var message = messageEl ? messageEl.value.trim() : "";

//   if (!firstName || !email || !message) {
//     if (statusDiv) {
//       statusDiv.style.display = "block";
//       statusDiv.innerHTML = '<div class="alert alert-warning py-2 px-3 mb-0" style="border-radius: 10px; font-size: 13.5px; background: #fff8e6; border: 1.5px solid #ffd56b; color: #7a5200;"><i class="fa-solid fa-triangle-exclamation me-2"></i> Please enter your First Name, Email, and Message.</div>';
//     }
//     return false;
//   }

//   var fullName = (firstName + " " + lastName).trim();
//   var mailRecipient = "ammaiyappaconsulting@gmail.com";
//   var mailSubject = subject ? ("[Enquiry] " + subject + " - " + fullName) : ("New Enquiry from " + fullName);

//   var mailBody = "Dear Ammaiyappa Financial Services,\n\n" +
//                  "I would like to submit an enquiry with the following details:\n\n" +
//                  "Full Name     : " + fullName + "\n" +
//                  "Email Address : " + email + "\n" +
//                  "Subject       : " + (subject || "Financial Services & Loan Guidance") + "\n\n" +
//                  "Message:\n" + message + "\n\n" +
//                  "--------------------------------------------------\n" +
//                  "Sent via Ammaiyappa Financial Services Website (Enquiry Form)";

//   var mailtoUrl = "mailto:" + mailRecipient +
//                   "?subject=" + encodeURIComponent(mailSubject) +
//                   "&body=" + encodeURIComponent(mailBody);

//   var gmailWebUrl = "https://mail.google.com/mail/?view=cm&fs=1" +
//                     "&to=" + encodeURIComponent(mailRecipient) +
//                     "&su=" + encodeURIComponent(mailSubject) +
//                     "&body=" + encodeURIComponent(mailBody);

//   // 1. Show Tick Icon Success Notification Card
//   if (statusDiv) {
//     statusDiv.style.display = "block";
//     statusDiv.innerHTML = 
//       '<div class="enquiry_notif_card">' +
//         '<div class="enquiry_notif_inner">' +
//           '<div class="enquiry_notif_icon_box">' +
//             '<i class="fa-solid fa-check"></i>' +
//           '</div>' +
//           '<div class="enquiry_notif_content">' +
//             '<div class="enquiry_notif_title">' +
//               '<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Message Sent Successfully!' +
//             '</div>' +
//             '<div class="enquiry_notif_desc">' +
//               'Your enquiry has been prepared and sent to <strong>' + mailRecipient + '</strong>. Opening your email app...' +
//             '</div>' +
//             '<div class="enquiry_notif_actions">' +
//               '<span>If your email app didn\'t open automatically:</span>' +
//               '<div class="enquiry_notif_btn_group">' +
//                 '<a href="' + mailtoUrl + '" class="enquiry_notif_btn btn_resend">' +
//                   '<i class="fa-solid fa-arrow-rotate-right"></i> Click to Send / Retry' +
//                 '</a>' +
//                 '<a href="' + gmailWebUrl + '" target="_blank" rel="noopener noreferrer" class="enquiry_notif_btn btn_gmail">' +
//                   '<i class="fa-brands fa-google"></i> Open in Gmail Web' +
//                 '</a>' +
//               '</div>' +
//             '</div>' +
//           '</div>' +
//           '<button type="button" class="enquiry_notif_close" onclick="document.getElementById(\'enquiryFormStatus\').style.display=\'none\'" aria-label="Close">&times;</button>' +
//         '</div>' +
//       '</div>';
//   }

//   // 2. Show Floating Toast Notification at Top-Right
//   var toast = document.getElementById("enquiryToastNotification");
//   if (toast) {
//     toast.style.display = "flex";
//     setTimeout(function () {
//       if (toast) toast.style.display = "none";
//     }, 6000);
//   }

//   // 3. Temporarily update the Send button with green tick icon
//   if (submitBtn) {
//     var originalContent = submitBtn.innerHTML;
//     submitBtn.classList.add("btn_sent_success");
//     submitBtn.innerHTML = '<span class="d-inline-flex align-items-center gap-2"><i class="fa-solid fa-check" style="font-size: 17px;"></i><span>Sent Successfully!</span></span>';
//     setTimeout(function () {
//       submitBtn.classList.remove("btn_sent_success");
//       submitBtn.innerHTML = originalContent;
//     }, 4500);
//   }

//   // 4. Trigger default system / browser email application
//   window.location.href = mailtoUrl;

//   return false;
// }
