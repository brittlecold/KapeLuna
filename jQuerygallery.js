
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

    $(document).ready(function() {
        // Event delegation for dynamically created .gallery-item elements
        $('.gallery').on('click', '.gallery-item', function() {
          var imgSrc = $(this).find('img').attr('src');
          var imgAlt = $(this).find('img').attr('alt');
          
          var modalHtml = '<div class="modal"><img src="' + imgSrc + '" alt="' + imgAlt + '"><span class="close">&times;</span></div>';
          
          $('body').append(modalHtml);
          
          $('.modal').fadeIn();
        });
      
        // Close modal when clicking on the close button or outside the modal
        $(document).on('click', '.close, .modal', function(e) {
          if ($(e.target).hasClass('close') || $(e.target).hasClass('modal')) {
            $('.modal').fadeOut(function() {
              $(this).remove();
            });
          }
        });
      });
      
      
      







