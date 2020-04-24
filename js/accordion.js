$(".accordion__content").hide();
        $(".accordion__header").click(function(evt) {
          evt.preventDefault();
          var $result = $(this).next(".accordion__content");
          if ($result.is(":hidden")) {
            $result.slideDown(300);
            $(this).addClass("active");
          } else {
            $result.slideUp(300);
            $(this).removeClass("active");
          }
        }); // end click