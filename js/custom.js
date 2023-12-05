



$(document).ready(function(){
	
	
	if($('.service-slider').length > 0) {
		$('.service-slider').slick({
			dots: false,
			infinite: true,
			slidesToShow: 3,
		    slidesToScroll: 1,
		    arrows: true,
		    prevArrow:"<div class='slick-prev'><span class='icon-left-open'></span></div>",
			nextArrow:"<div class='slick-next'><span class='icon-right-open'></span></div>",
		    responsive: [
				{
				  breakpoint: 991,
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