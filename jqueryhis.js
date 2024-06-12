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
    // Variables to keep track of current slide and total number of slides
    var currentSlide = 0;
    var totalSlides = $('.imageitem').length;
    var slideWidth = $('.imageitem').outerWidth();
    var sliderWidth = $('.sliderwrapper').width(); // Get the width of the slider container

    // Function to show the current slide
    function showSlide(index) {
        var translateValue = -index * slideWidth;
        $('.imagelist').css('transform', 'translateX(' + translateValue + 'px)');
    }

    // Event listener for previous slide button
    $('#prevslide').click(function() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
            updateNextButtonVisibility(); // Update next button visibility
        }
    });

    // Event listener for next slide button
    $('#nextslide').click(function() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            showSlide(currentSlide);
            updateNextButtonVisibility(); // Update next button visibility
        }
    });

    // Update the visibility of the next button initially
    updateNextButtonVisibility();

    // Function to update the next button visibility
    function updateNextButtonVisibility() {
        if (currentSlide >= totalSlides - Math.floor(sliderWidth / slideWidth)) {
            $('#nextslide').css('display', 'none'); // Hide next button when last few slides are reached
        } else {
            $('#nextslide').css('display', 'block');
        }
    }

    // Attach an event listener to the scroll event of the slider container
    $('.sliderwrapper').on('scroll', function() {
        // Update the current slide based on the scroll position
        currentSlide = Math.round($('.sliderwrapper').scrollLeft() / slideWidth);
        updateNextButtonVisibility(); // Update next button visibility
    });
});


function showSlide(index) {
    var translateValue = -index * slideWidth;
    $('.imagelist').stop().animate({ 'left': translateValue }, 500); // Smooth animation for image movement
    updateScrollbarPosition();
}
