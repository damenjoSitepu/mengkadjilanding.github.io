// Loading ini hanya akan jalan saat landing page diakses ( tidak untuk seluruh page )

$(window).on('load', function () {
    // Enable Scrolling mode
    setTimeout(function () {
        $('body').removeClass('stop-scrolling');
        $(".loadSaber").hide();

        // Animasi landing page utama awal
        // $('.m-navbar').addClass('ani-start-page');
        $('.m-starter').addClass('ani-m-starter');
        $('.m-starter-body h3').attr('id', 'm-starter-proudly');
        $('.m-starter-body h1').attr('id', 'm-starter-discover');
        $('.m-starter-body h2').attr('id', 'm-starter-try');
        $('.m-starter-body a').attr('id', 'm-starter-link');
    }, 5000);

    // Scroll Reveal
    ScrollReveal({
        reset: false,
        distance: '60px',
        duration: 2500,
        delay: 500
    })

    // Starter
    ScrollReveal().reveal('.m-program-categorys', {
        origin: 'top'
    });

    ScrollReveal().reveal('.m-program-category-spawn', {
        delay: 250,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.m-program-category-container', {
        delay: 250,
        origin: 'top'
    });


    // review
    ScrollReveal().reveal('.m-review h2', {
        delay: 250,
        origin: 'top'
    });

    ScrollReveal().reveal('.m-review h3', {
        delay: 250,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.rcv-1', {
        delay: 250,
        origin: 'top'
    });

    ScrollReveal().reveal('.rcv-2', {
        delay: 250,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.m-review-content-mid', {
        delay: 250,
        origin: 'top'
    });


    // Interested
    ScrollReveal().reveal('.m-interested-content-lists-1', {
        delay: 250,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.m-interested-content-lists-2', {
        delay: 250,
        origin: 'top'
    });

    ScrollReveal().reveal('.m-interested-content-lists-3', {
        delay: 250,
        origin: 'bottom'
    });

    ScrollReveal().reveal('.m-interested-content-sticky', {
        delay: 250,
        origin: 'top'
    });

    // Social Media
    ScrollReveal().reveal('.m-social-media', {
        delay: 250
    });


    // Scroll Reveals
    ScrollReveal({
        reset: true,
        distance: '0px',
        duration: 1000,
        delay: 0
    })

    ScrollReveal().reveal('.ic-1', {
        delay: 500
    });

    ScrollReveal().reveal('.ic-2', {
        delay: 500
    });

    ScrollReveal().reveal('.ic-3', {
        delay: 500
    });
});