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

    // Starter
    ScrollReveal().reveal('.m-social-starter h2', {
        delay: 250,
        origin: 'top'
    });

    ScrollReveal().reveal('.m-social-starter h1', {
        delay: 250,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.m-social-starter p', {
        delay: 250,
        origin: 'top'
    });

    let counter = 250;
    $(".m-social-starter div a").each(function () {
        ScrollReveal().reveal($(this), {
            delay: counter,
            origin: 'top'
        });
        counter += 250;
    });

    // Date Time
    let counters = 250;
    $(".m-date-events-header div i").each(function () {
        ScrollReveal().reveal($(this), {
            delay: counters,
            origin: 'top'
        });
        counters += 250;
    });

    ScrollReveal().reveal('.m-date-events-header h1', {
        delay: 600,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.m-date-events-header p', {
        delay: 600,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.m-date-events-content', {
        delay: 750,
        origin: 'top'
    });

    // Description
    ScrollReveal().reveal('.m-social-description-title', {
        delay: 250,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.m-grid .left-side', {
        delay: 500,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.left-sides', {
        delay: 750,
        origin: 'top'
    });

    // Issue
    ScrollReveal().reveal('.m-social-issue h1', {
        delay: 250,
        origin: 'top'
    });

    ScrollReveal().reveal('.m-social-issue p', {
        delay: 500,
        origin: 'top'
    });

    let counterss = 250;
    $(".m-social-issue-img div img").each(function () {
        ScrollReveal().reveal($(this), {
            delay: counterss,
            origin: 'bottom'
        });
        counterss += 250;
    });

    // Documentation
    ScrollReveal().reveal('.m-documentation-title', {
        delay: 250,
        origin: 'top'
    });

    let countersss = 250;
    $(".m-documentation-list .list").each(function () {
        ScrollReveal().reveal($(this), {
            delay: countersss,
            origin: 'bottom'
        });
        countersss += 250;
    });

    // Appreciate
    ScrollReveal().reveal('.m-appreciate h1', {
        delay: 250,
        origin: 'top'
    });

    let counterssss = 250;
    $(".m-appreciate-logo img").each(function () {
        ScrollReveal().reveal($(this), {
            delay: counterssss,
            origin: 'bottom'
        });
        counterssss += 250;
    });



});

// Klik diluar image setelah image di klik
$(document).on("click", function (e) {
    if (!(($(e.target).closest("." + 'm-ann-modal-content').length > 0) || ($(e.target).closest("." + 'left-side-protocol').length > 0))) {
        $(".m-ann-modal").hide('fast');
    }
});