
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

$(document).ready(function() {
    $('.overlay').click(function() {
        $('#myModal').fadeIn();
    });

    $('.close').click(function() {
        $('#myModal').fadeOut();
    });

    $(window).click(function(event) {
        if ($(event.target).is('#myModal')) {
            $('#myModal').fadeOut();
        }
    });
});

$(document).ready(function() {
    // Modal functionality
    $('.trigger-overlay').click(function() {
        $('#myModal').fadeIn();
    });

    $('.close').click(function() {
        $('#myModal').fadeOut();
    });

    $(window).click(function(event) {
        if ($(event.target).is('#myModal')) {
            $('#myModal').fadeOut();
        }
    });

    // Music player functionality
    var audio = $('#audio-player')[0];
    var isPlaying = false;
    var currentTrack = 0;
    var tracks = Array.from({length: 25}, (_, i) => `Music/${i + 1}.mp3`);

    function playTrack(index) {
        if (index < 0 || index >= tracks.length) return;
        currentTrack = index;
        audio.src = tracks[currentTrack];
        audio.play();
        $('#play-pause').html('<i class="fa fa-pause"></i>');
        isPlaying = true;
    }

    $('#play-pause').click(function() {
        if (isPlaying) {
            audio.pause();
            $(this).html('<i class="fa fa-play"></i>');
        } else {
            audio.play();
            $(this).html('<i class="fa fa-pause"></i>');
        }
        isPlaying = !isPlaying;
    });

    $('#prev').click(function() {
        if (currentTrack > 0) {
            playTrack(currentTrack - 1);
        }
    });

    $('#next').click(function() {
        if (currentTrack < tracks.length - 1) {
            playTrack(currentTrack + 1);
        }
    });

    audio.onended = function() {
        if (currentTrack < tracks.length - 1) {
            playTrack(currentTrack + 1);
        } else {
            $('#play-pause').html('<i class="fa fa-play"></i>');
            isPlaying = false;
        }
    };

    // Hide music player on scroll
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('.music-player').addClass('hidden');
        } else {
            $('.music-player').removeClass('hidden');
        }
        lastScrollTop = st;
    });
});





