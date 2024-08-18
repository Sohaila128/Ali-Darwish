$(document).ready(function(){
  $('.first-slide').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
          {
              breakpoint: 355,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
              }
          },
      ]
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
      var totalVisible = slick.options.slidesToShow; 
      var centerSlideIndex = Math.floor(totalVisible / 2); 
      var centerIndex = (nextSlide + centerSlideIndex) % slick.$slides.length;

      $('.card').removeClass('card-center');

      slick.$slides.eq(centerIndex).find('.card').addClass('card-center');
  });

  $('.first-slider-nav .prev').click(function(){
      $('.first-slide').slick('slickPrev');
  });

  $('.first-slider-nav .next').click(function(){
      $('.first-slide').slick('slickNext');
  });
});
