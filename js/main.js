  $(function () {
    // init tabs
    $("#tabs").tabs({
      hide: {
        effect: "fade",
        duration: 500
      }
    });

    //   init modal dialog
    $("#dialog").dialog({
      autoOpen: false,
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

    // click and open modal
    $(".product__btn").on("click", function () {
      $("#dialog").dialog("open");
    });

    // custom select
    $("#speed").selectmenu();

    // smooth scrolling 
    $('.scroll-to').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();

        let hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    })
  });
