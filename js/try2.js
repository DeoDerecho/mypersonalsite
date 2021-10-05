$(window).scroll(function() {
    $('.skills').each(function(){
      var pos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
        if (pos < topOfWindow+400) {
            $(this).addClass("fadeIn");
          }
        });
      });
