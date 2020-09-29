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
      });

      $(".product__btn").on("click", function () {
          $("#dialog").dialog("open");
      });
  });