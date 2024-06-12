
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





