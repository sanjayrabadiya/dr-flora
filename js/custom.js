



$(document).ready(function(){
	$('.menu-icon').click(function(){
		$('body').addClass('showmenu');
	});
	$('.menu-icon-close,.menu ul li a').click(function(){
		$('body').removeClass('showmenu');
	});
	
	if($('.product-slider').length > 0) {
		$('.product-slider').slick({
			dots: false,
			infinite: true,
			slidesToShow: 5,
		    slidesToScroll: 1,
		    arrows: true,
		    prevArrow:"<div class='slick-prev'></div>",
			nextArrow:"<div class='slick-next'></div>",
		    responsive: [
				{
					breakpoint: 1200,
					settings: {
					  	slidesToShow: 4
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 767,
					settings: {
					  	slidesToShow: 2
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}
	if($('.raves-reviews-slider').length > 0) {
		$('.raves-reviews-slider').slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: true,
		    prevArrow:"<div class='slick-prev'></div>",
			nextArrow:"<div class='slick-next'></div>",		    
		});
	}
	if($('.testimonial-slider').length > 0) {
		$('.testimonial-slider').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
		    slidesToScroll: 1,
		    arrows: false,		   	    
		});
	}

	if($('.instagram-slider').length > 0) {
		$('.instagram-slider').slick({
			dots: false,
			infinite: true,
			slidesToShow: 6,
		    slidesToScroll: 1,
		    arrows: true,
		    prevArrow:"<div class='slick-prev'></div>",
			nextArrow:"<div class='slick-next'></div>",		
			responsive: [
				{
					breakpoint: 767,
					settings: {
					  	slidesToShow: 5
					}
				},
				{
					breakpoint: 600,
					settings: {
					  	slidesToShow: 4
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 2
					}
				}
			]    
		});
	}	

	if($('.tab-nav').length > 0) {
		$('.tab-nav span').on('click', function() {
			$([$(this).parent()[0], $($(this).data('href'))[0]]).addClass('active').siblings('.active').removeClass('active');
		});
	}
	if($('.faq-accordion').length > 0){
		$('.faq-accordion .item').click(function(){
			$(this).toggleClass(' active ');
			$(this).siblings().removeClass(' active '); 
			$('.faq-answer').stop().slideUp();
			$('.active .faq-answer').stop().slideDown();
			return false;
		});
	}
	if($('.recipes-filter-wrapper').length > 0) {
		$(".recipes-single-filter-title a").on("click", function(e){
			e.preventDefault();
			if($(this).parent().hasClass("active"))
			{
				$(this).parent().removeClass("active");
				$(this).parent().parent().find(".recipes-single-filter-list").slideUp();
			}
			else
			{
				$(this).parent().addClass("active");
				$(this).parent().parent().find(".recipes-single-filter-list").slideDown();
			}
		});
	}
		
});


var slickSliderActive = false;
function checkSlider(){    
  if( $(window).width() < 768 ) {
    if(slickSliderActive == false) {
      $('.mobile-slider').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		prevArrow:"<div class='slick-prev'></div>",
		nextArrow:"<div class='slick-next'></div>",
      });
	  $('.client-logo').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		prevArrow:"<div class='slick-prev'></div>",
		nextArrow:"<div class='slick-next'></div>",
      });
	  $('.client-logo-horizone').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		prevArrow:"<div class='slick-prev'></div>",
		nextArrow:"<div class='slick-next'></div>",
      });
	  $('.coaching-box').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		arrows:true,
		prevArrow:"<div class='slick-prev'></div>",
		nextArrow:"<div class='slick-next'></div>",
      });
      slickSliderActive = true;
    }
  } 
  else {
    if(slickSliderActive == true) {
      $('.mobile-slider').slick('unslick');
	  $('.client-logo').slick('unslick');
	  $('.client-logo-horizone').slick('unslick');
	  $('.coaching-box').slick('unslick');
      slickSliderActive = false;
    }
    
  }
};

checkSlider();
$(window).on('resize', checkSlider);