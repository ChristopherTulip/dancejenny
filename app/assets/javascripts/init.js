
function init() {
  menu();
  backstretch();
  slider();
  contentslider();
  // map();
  panels();
  blogposts();
}

function menu() {
  // $(".menu,.nav .home,.nav .about,.nav .work,.nav .contact ").click(function(){
  console.log($(".menu"));
  $(".menu").click(function(){
    $(".nav-section").toggleClass("show");
    $(".menu .nav-bar:nth(0)").toggleClass("animate-0");
    $(".menu .nav-bar:nth(1)").toggleClass("animate-1");
    $(".menu .nav-bar:nth(2)").toggleClass("animate-2");
  });

  var topPadding = 50;
  var offset = $(".menu").offset();

  $(window).scroll(function() {
    var menu = $(".menu");

    if(this.innerWidth > 1100) {
      menu.stop().animate({
        marginTop: $(window).scrollTop() - offset.top + topPadding
      });
    } else {
      menu.stop().animate({
          marginTop: 0
      });
    };
  });
  $('.scroll').smoothScroll();

  console.log("init menu");
}


function backstretch() { // used for fulldiv backgrounds
  $(".bp-post").backstretch("assets/11.jpg");
  $(".photo-album").backstretch([
    "assets/7.jpg", "assets/11.jpg", "assets/3.jpg"
    ], {
    duration: 10000,
    fade: 750
  });
  $(".bp-post.two").backstretch("assets/12.jpg");
  $(".portfolio-img.one").backstretch("assets/8.jpg");
  $(".portfolio-img.two").backstretch("assets/9.jpg");
  $(".portfolio-img.three").backstretch("assets/10.jpg");
  $(".portfolio-img.four").backstretch("assets/11.jpg");
  $(".portfolio-img.five").backstretch("assets/12.jpg");
  $(".portfolio-img.six").backstretch("assets/13.jpg");
  $(".portfolio-img.seven").backstretch("assets/14.jpg");
  $(".portfolio-img.eight").backstretch("assets/15.jpg");
  $(".portfolio-img.nine").backstretch("assets/16.jpg");
    $(window).resize(function () {
  $(".bp-post").backstretch("assets/11.jpg");
  $(".photo-album").backstretch([
    "assets/7.jpg", "assets/11.jpg", "assets/3.jpg"
    ], {
    duration: 10000,
    fade: 750
  });
  $(".bp-post.two").backstretch("assets/12.jpg");
  $(".portfolio-img.one").backstretch("assets/8.jpg");
  $(".portfolio-img.two").backstretch("assets/9.jpg");
  $(".portfolio-img.three").backstretch("assets/10.jpg");
  $(".portfolio-img.four").backstretch("assets/11.jpg");
  $(".portfolio-img.five").backstretch("assets/12.jpg");
  $(".portfolio-img.six").backstretch("assets/13.jpg");
  $(".portfolio-img.seven").backstretch("assets/14.jpg");
  $(".portfolio-img.eight").backstretch("assets/15.jpg");
  $(".portfolio-img.nine").backstretch("assets/16.jpg");
    });

  console.log("init backstretch");
}

function slider() {
  $('#slider').flexslider({
    animation: "slide"
  });

  console.log("init slider");
}

function panels() {
  // album panel
  $('#album').on('click', function() {
    $("body").addClass("no-scroll");
      $('.panel').animate({
          'width': 'show'
      }, 1000, function() {
          $('.panel .album').fadeIn(500);
      });
  });
  $('i.closeicon').on('click', function() {
      $('.panel .album').fadeOut(500, function() {
        $("body").removeClass("no-scroll");
          $('.panel').animate({
              'width': 'hide'
          }, 1000);
      });
  });

  // portfolio panel
    $("#portfolio, #portfolio2, #portfolio3, #portfolio4, #portfolio5, #portfolio6, #portfolio7, #portfolio8, #portfolio9").on('click', function() {
      $("body").addClass("no-scroll");
        $('.panel').animate({
            'width': 'show'
        }, 1000, function() {
            $('.panel .work').fadeIn(500);
        });
    });
    $('.closeicon').on('click', function() {
        $('.panel .work').fadeOut(500, function() {
          $("body").removeClass("no-scroll");
            $('.panel').animate({
                'width': 'hide'
            }, 1000);
        });
    });

  console.log("init panels");
}

function blogposts() { // only use if span is at the end of the row
  $("#blogone").click(function(){
    $(".blog-post-item.one").toggleClass("reveal");
    $(".blog-post-item.two").removeClass("reveal"); // you dont have to add this line
  });
  $("#blogtwo").click(function(){
    $(".blog-post-item.two").toggleClass("reveal");
    $(".blog-post-item.one").removeClass("reveal"); // you dont have to add this line
  });

  console.log("init blogposts");
}

function contentslider() {
  $('#content').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav: false
  });

    console.log("init contentslider");
}

// function map() {
//   new GMaps({
//     div: '#map',
//     lat: 40.71435,
//     lng: -74.00597,
//     scrollwheel: false
//   });
// }
