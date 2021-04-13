//slider
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        fade: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        appendDots: $('.slider-pagination')
    })
    .on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
});

//slider
$(document).ready(function () {
    $('.testimotionals-slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        speed: 1500,
        slidesToShow: 1,
        autoplay: true,
        infinite: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        appendDots: $('.testimotionals-slider__pagination'),
        responsive:[
            {
                breakpoint: 700,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});

//gallery
$(document).ready(function () {
    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,

        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] 
        },
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 
        }
    });
});


//number animation
$('.number').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
    if (isScrolledIntoView($(".skills")) && !viewed) {
        viewed = true;
        $('.number').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
}

//burger menu
$(document).ready(function() {
    $(".burger-menu").click(function(e) {
      $(".burger-menu, .nav").toggleClass("active");
      $("body").toggleClass("lock");
    });
  });

//scroll
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) 
		{
			$('.scroll').fadeIn();
		} 
		else 
		{
			$('.scroll').fadeOut();
		}
	});

	$('.scroll').click(function(){
		$('html, body').animate({scrollTop : 0},500);
		return false;
	});
	
});

//wow
$(function(){
    new WOW().init(); 
  });