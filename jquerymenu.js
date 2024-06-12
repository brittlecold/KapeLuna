//scrollbutton
$(document).ready(function() {
    $('.sliderimage').on('click', function(){
        $('.sliderimage').removeClass('active');
        $(this).addClass('active');
    });

    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#scrollToTopBtn').addClass('show');
            } else {
                $('#scrollToTopBtn').removeClass('show');
            }
        });
    
        $('#scrollToTopBtn').click(function() {
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    });

});
//scrollbutton

$(document).ready(function() {
    $('.filters_menu li').on('click', function() {
      var filterValue = $(this).attr('data-filter'); 

   
      $('.filters_menu li').removeClass('active');
      $(this).addClass('active');

      if (filterValue === "*") {
        $('.all').show();
      } else {
        $('.all').hide();
        $(filterValue).show();
      }
    });
  });
  $(document).ready(function(){
    $('#search-input').on('keyup', function() {
      var value = $(this).val().toLowerCase();
      $('.rowgrid .box').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  
