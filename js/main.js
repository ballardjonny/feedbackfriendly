$(document).ready(function(){
  $('.feedback-reccomendations').slick({
    infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  });

  $('.company-logos').slick({
    infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
  dots: true,
  });

$('.modal-one').click(function () {
			$('.modal').addClass('is-active');
		});

    $('.modal-background, .delete').click(function () {
    			$('.modal').removeClass('is-active');
    		});

});