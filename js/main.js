$(document).ready(function(){
  $('.feedback-reccomendations').slick({
    infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
  });

  $('.company-logos').slick({
    infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
        swipeToSlide: true,
      }
    }
  ]
  });

$('.modal-one').click(function () {
			$('.modal').addClass('is-active');
		});

    $('.modal-background, .delete').click(function () {
    			$('.modal').removeClass('is-active');
    		});

});
