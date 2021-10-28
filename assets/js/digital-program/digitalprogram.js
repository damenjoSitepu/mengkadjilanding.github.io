$(window).on('load', function () {
    $('body').removeClass('stop-scrolling');
    $(".loadSaber").hide();
});

$(document).ready(function () {
    $(".left-side-protocol").on('click', function () {
        $('.m-ann-modal').show('fast');
    });

    // Scroll Reveal
    ScrollReveal({
        reset: false,
        distance: '60px',
        duration: 2500,
        delay: 500
    });

    // Starter Digital Program
    ScrollReveal().reveal('.left-side h4', {
        delay: 250,
        origin: 'top'
    });

    ScrollReveal().reveal('.left-side h1', {
        delay: 250,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.left-side small', {
        delay: 500,
        origin: 'left'
    });

    ScrollReveal().reveal('.left-side a', {
        delay: 750,
        origin: 'bottom'
    });




    // Our Collaboration
    ScrollReveal().reveal('.m-collab h1', {
        delay: 750,
        origin: 'bottom'
    });

    let counter = 250;
    $(".m-collab-flex img").each(function () {
        ScrollReveal().reveal($(this), {
            delay: counter,
            origin: 'top'
        });
        counter += 250;
    });

    // Annoucement
    ScrollReveal().reveal('.m-annoucement h1', {
        delay: 250,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.left-sides', {
        delay: 400,
        origin: 'left'
    });

    ScrollReveal().reveal('.right-sides', {
        delay: 500,
        origin: 'right'
    });

    // Speaker
    ScrollReveal().reveal('.m-speaker-container h1', {
        delay: 500,
        origin: 'top'
    });

    let counter2 = 250;
    $(".m-speaker-grid .content").each(function (i, v) {
        let origin = '';

        if (i % 2 != 0) {
            origin = 'top';
        } else {
            origin = 'bottom';
        }

        ScrollReveal().reveal($(this), {
            delay: counter2,
            origin: origin
        });
        counter2 += 250;
    });

    // Status
    ScrollReveal().reveal('.m-status-content', {
        delay: 250,
        origin: 'top'
    });

    ScrollReveal().reveal('.m-status-body', {
        delay: 500,
        origin: 'bottom'
    });

    // Limit
    ScrollReveal().reveal('.m-limit-container h1', {
        delay: 250,
        origin: 'left'
    });

    ScrollReveal().reveal('.m-limit-container h2', {
        delay: 600,
        origin: 'right'
    });

    // Feedback
    ScrollReveal().reveal('.m-feedback-title', {
        delay: 250,
        origin: 'top'
    });


    let counter3 = 250;
    $(".m-feedback-container .feedback-view").each(function (i, v) {
        let origin = '';

        if (i % 2 != 0) {
            origin = 'left';
        } else {
            origin = 'right';
        }

        ScrollReveal().reveal($(this), {
            delay: counter3,
            origin: origin
        });
        counter3 += 250;
    });
});

// Klik diluar image setelah image di klik
$(document).on("click", function (e) {
    if (!(($(e.target).closest("." + 'm-ann-modal-content').length > 0) || ($(e.target).closest("." + 'left-side-protocol').length > 0))) {
        $(".m-ann-modal").hide('fast');
    }
});