$(window).on('load', function () {
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
});

$(document).ready(function () {
    setTimeout(function () {
        $(".loadSaber").hide();
    }, 6000);


    // Saat menu list di hover
    $(".m-navbar-list a").mouseenter(function () {
        $(this).toggleClass('menulist');
    });


    $(".m-navbar-list a").mouseleave(function () {
        $(this).toggleClass('menulist');
    })

    // Saat navbar diklik , maka munculkan menu listnya dalam bentuk responsive phone ( mobile )
    $(document).on('click', '.m-navbar-responsive-click', function (e) {
        e.preventDefault();
        if ($(".m-navbar-responsive-list").is(':visible')) {
            $('.lightSaber').hide('fast');
            $(".m-navbar-responsive-list").hide('fast');
            $(".m-navbar-responsive-click i").removeClass('fa-times').addClass('fa-bars');
            $(".m-navbar-responsive-click").removeAttr('id', 'bar-transform').attr('id', 'bar-transform-rev');
        } else {
            $('.lightSaber').show('fast');
            $(".m-navbar-responsive-list").show('fast');
            $(".m-navbar-responsive-click i").removeClass('fa-bars').addClass('fa-times');
            $(".m-navbar-responsive-click").removeAttr('id', 'bar-transform-rev').attr('id', 'bar-transform');

        }
    })

    $(document).on('click', '.m-navbar-responsive-list-close', function (e) {
        e.preventDefault();
        $('.lightSaber').hide('fast');
        $(".m-navbar-responsive-list").hide('fast');
        $(".m-navbar-responsive-click i").removeClass('fa-times').addClass('fa-bars');
        $(".m-navbar-responsive-click").removeAttr('id', 'bar-transform').attr('id', 'bar-transform-rev');
    });

    // Saat klik navbar mobile namun outter
    $(document).on("click", function (e) {
        if (!(($(e.target).closest("." + 'm-navbar-responsive-click').length > 0) || ($(e.target).closest("." + 'm-navbar-responsive-list').length > 0))) {
            $('.lightSaber').hide('fast');
            $(".m-navbar-responsive-click i").removeClass('fa-times').addClass('fa-bars');
            $(".m-navbar-responsive-list").hide('fast');
            $(".m-navbar-responsive-click").removeAttr('id', 'bar-transform').attr('id', 'bar-transform-rev');
        }
    });

    $(window).on('resize', function () {
        if ($(this).width() > 900) {
            $("body").css({
                transition: '.2s linear',
                backgroundColor: '#fff'
            });
            $(".m-navbar-responsive-click i").removeClass('fa-times').addClass('fa-bars');
            $(".m-navbar-responsive-list").hide('fast');
            $(".m-navbar-responsive-click").removeAttr('id', 'bar-transform').attr('id', 'bar-transform-rev');
            $('.lightSaber').hide('fast');
        }
    });


    // Khusus program category
    $(document).on('click', '.m-program-category-spawn a', function (e) {
        e.preventDefault();

        // loop untuk button spawn link category
        $('.m-program-category-spawn a').each(function () {
            $(this).removeClass('choosen');
        });

        // loop untuk meng none kan seluruh isi
        let myCategory = $(this).data('category');

        $(".m-program-category-contents").each(function () {
            if ($(this).hasClass(myCategory)) {
                $(this).show();

            } else {
                $(this).hide();
            }
        });

        $(this).addClass('choosen');
    })
    // End Program Category

    // Scroll event
    $(window).on('scroll', function () {
        let myScroll = $(window).scrollTop();

        if (myScroll > $(".m-reviews").offset().top - 750) {
            $(".corner-icon").show('fast');
        } else {
            $(".corner-icon").hide('fast');
        }
    });


    $('.corner-icon').click(function (event) {
        event.preventDefault();

        let myScroll = $(window).scrollTop();

        if (!event.detail || event.detail == 1) {
            $('html, body').animate({ scrollTop: myScroll + 100 }, 250).animate({ scrollTop: 0 }, 1000);
        }

        return false;
    })

    // Skenario Menu bar akan di tutup saat mencapai ketinggian tertentu ( scroll )
    // Saat halaman discroll kebawah, maka hilangkan navbar, sebaliknya
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let myScroll = $(window).scrollTop();

        if (myScroll > $('.m-starter').offset().top - 300 + $('.m-starter').height()) {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos < currentScrollPos) {
                // list menu di responsive mobile sedang terbuka, maka jika discroll jangan ditutup.
                if ($('.m-navbar-responsive-list').is(':visible') == false) {
                    $(".m-navbar .m-navbar-logo").css(
                        {
                            opacity: '0',
                            transition: '.4s linear',
                            transform: 'translate(-100%,0)'
                        }
                    );

                    $(".m-navbar .m-navbar-list").css(
                        {
                            opacity: '0',
                            transition: '.4s linear',
                            transform: 'translate(100%,0)'
                        }
                    );

                    $(".m-navbar .m-navbar-responsive").css(
                        {
                            opacity: '0',
                            transition: '.4s linear',
                            transform: 'translate(100%,0)'
                        }
                    );

                    $(".m-navbar").css(
                        {
                            opacity: '0',
                            transition: '.4s linear'
                        }
                    );
                }

            } else {
                $(".m-navbar .m-navbar-logo").css(
                    {
                        opacity: '1',
                        transition: '.4s linear',
                        transform: 'translate(0,0)'
                    }
                );

                $(".m-navbar .m-navbar-list").css(
                    {
                        opacity: '1',
                        transition: '.4s linear',
                        transform: 'translate(0,0)'
                    }
                );

                $(".m-navbar .m-navbar-responsive").css(
                    {
                        opacity: '1',
                        transition: '.4s linear',
                        transform: 'translate(0,0)'
                    }
                );

                $(".m-navbar").css(
                    {
                        opacity: '1',
                        transition: '.4s linear'
                    }
                );
            }
            prevScrollpos = currentScrollPos;
        }
    }



});