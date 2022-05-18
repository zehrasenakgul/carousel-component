var Slider = function () {
    var initSlider = function () {
      var dir = $("html").attr("dir");
      var swipeHandler = new Hammer(document.getElementById("slider"));
    
      $(".slider .slide").click(function (event) {
        var slideIndex = $(this).index();
        var nextActiveSlide = $($(".slider").children()[slideIndex]);
        $(".slider .slide").removeClass("active");
        $(this).addClass("active");
  
        updateSlides(nextActiveSlide);
      });
  
      var updateSlides = function (nextActiveSlide) {
        var nextActiveSlideIndex = $(nextActiveSlide).index();
  
        $(".slide").removeClass("prev-1");
        $(".slide").removeClass("next-1");
        $(".slide").removeClass("active");
        $(".slide").removeClass("prev-2");
        $(".slide").removeClass("next-2");
  
        nextActiveSlide.addClass("active");
  
        nextActiveSlide.prev().addClass("prev-1");
        nextActiveSlide.prev().prev().addClass("prev-2");
        nextActiveSlide.addClass("active");
        nextActiveSlide.next().addClass("next-1");
        nextActiveSlide.next().next().addClass("next-2");
      };
  
      var updateToNextSlide = function (nextActiveSlide)
      {
  
      };
    };
    return {
      init: function () {
        initSlider();
      } };
  
  }();
  
  $(function () {
    Slider.init();
  });
  //# sourceURL=pen.js