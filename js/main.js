  $(function () {
      $("#tabs").tabs({
          hide: {
              effect: "fade",
              duration: 500
          }
      });

      $("#dialog").dialog({
        //   autoOpen: false,
        width: 640,
        show: {
            effect: "fade"
        },
        hide: {
            effect: "fade"
        },
        open: function () {
           $('.page').addClass('page_modal-opened');
        },
        close: function () {
           $('.page').removeClass('page_modal-opened');
        },
      });

      $(".product__btn").on("click", function () {
          $("#dialog").dialog("open");
      });
  });