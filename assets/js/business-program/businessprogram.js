$(window).on('load', function () {
    $('body').removeClass('stop-scrolling');
    $(".loadSaber").hide();
});

$(document).ready(function () {
    // Scroll Reveal
    ScrollReveal({
        reset: false,
        distance: '60px',
        duration: 2500,
        delay: 500
    });

    // Starter
    ScrollReveal().reveal('.still-left h1', {
        delay: 250,
        origin: 'top'
    });

    ScrollReveal().reveal('.still-left h2', {
        delay: 600,
        origin: 'top'
    });

    ScrollReveal().reveal('.still-left p', {
        delay: 850,
        origin: 'top'
    });

    let counter = 850;
    $(".still-left div a").each(function () {

        ScrollReveal().reveal($(this), {
            delay: counter,
            origin: 'bottom'
        });

        counter += 250;
    });

    // For Deal
    ScrollReveal().reveal('.m-we-deal h2', {
        delay: 250,
        origin: 'top'
    });

    ScrollReveal().reveal('.m-we-deal h1', {
        delay: 500,
        origin: 'top'
    });

    ScrollReveal().reveal('.m-we-deal p', {
        delay: 750,
        origin: 'top'
    });

    ScrollReveal().reveal('.m-we-deal-img', {
        delay: 1000,
        origin: 'bottom'
    });

    let counters = 750;
    $(".m-we-deal-icon i").each(function () {

        ScrollReveal().reveal($(this), {
            delay: counters,
            origin: 'bottom'
        });

        counters += 250;
    });

    // Something you need to know
    ScrollReveal().reveal('.m-something-you-title', {
        delay: 250,
        origin: 'top'
    });

    ScrollReveal().reveal('.m-something-you-grid', {
        delay: 750,
        origin: 'bottom'
    });

    // Solution
    ScrollReveal().reveal('.solution-left', {
        delay: 250,
        origin: 'top'
    });

    ScrollReveal().reveal('.solution-right h1', {
        delay: 250,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.solution-right h2', {
        delay: 500,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.solution-right p', {
        delay: 750,
        origin: 'bottom'
    });

    // Services
    ScrollReveal().reveal('.m-services-header', {
        delay: 250,
        origin: 'top'
    });

    let counterss = 750;
    $(".service-list").each(function (i) {
        let chooseYourPath = '';

        if (i % 2 != 0) {
            chooseYourPath = 'top';
        } else {
            chooseYourPath = 'bottom';
        }

        ScrollReveal().reveal($(this), {
            delay: counterss,
            origin: chooseYourPath
        });

        counterss += 250;
    });
});