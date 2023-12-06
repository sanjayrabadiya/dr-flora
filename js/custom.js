



$(document).ready(function(){
	
	
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
	

	if($('.tab-nav').length > 0) {
		$('.tab-nav span').on('click', function() {
			$([$(this).parent()[0], $($(this).data('href'))[0]]).addClass('active').siblings('.active').removeClass('active');
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
		prevArrow:"<div class='slick-prev'><span class='icon-left-open'></span></div>",
		nextArrow:"<div class='slick-next'><span class='icon-right-open'></span></div>",
      });
      slickSliderActive = true;
    }
  } 
  else {
    if(slickSliderActive == true) {
      $('.mobile-slider').slick('unslick');
      slickSliderActive = false;
    }
    
  }
};

checkSlider();
$(window).on('resize', checkSlider);