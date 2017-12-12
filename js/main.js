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
        slidesToShow: 1,
        swipeToSlide: true,
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
        slidesToShow: 2,
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

		if ($('.animate').is(':visible')){
		$('.animate').addClass("visible");
		}


    var $form = $('form#test-form'),
        url = 'https://script.google.com/macros/u/0/s/AKfycbySUaWbVwpKmLl_WvhPxb9Sg4gFFOz8ylCE-jWPpelBd4mK6NcH/exec'

    $('#submit-form').on('click', function(e) {
      e.preventDefault();
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
      }).success(
        // do something
      );
    })


});
