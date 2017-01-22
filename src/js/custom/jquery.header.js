(function ($) {
    $(document).ready(function() {
        var buttonMenu = $( '.header__menu' ),
            mobileMenu = $( '.mobile-menu' ),
            timeEffect = 400,
            timeDelay = 300,
            dropdown = '.header__nav-sublist',
            navItemMore = $('.header__nav-item--more'),
            buttonMore = $('.mobile-menu__item--more'),
            mobileList = $('.mobile-menu__sublist');

        slideMenu(buttonMenu, mobileMenu);
        setClassHeader();

        function slideMenu(button, menu) {
            button.on( 'click', function (event) {
                $( menu ).slideToggle( timeEffect );
                event.preventDefault();
            });
        }

        function dropListMenu() {
            navItemMore.on( 'click', function (event) {
                var dropdownList = $(this).children(dropdown);

                $( dropdownList ).toggle( timeEffect );
                event.preventDefault();
            });
        }

        function setClassHeader() {
            var hrefPage = window.location,
                header = $('.header'),
                navLink = $('.header__nav-link'),
                checkHrefPage = /about/i.test(hrefPage) || /contacts/i.test(hrefPage);

            if (checkHrefPage) {
                header.addClass('header--white');
            }

            if (/about/i.test(hrefPage)) {
                navLink.eq(0).addClass('header__nav-link--active');
            } else if (/contacts/i.test(hrefPage)) {
                navLink.eq(2).addClass('header__nav-link--active');
            }
        }
    })
}( jQuery, jQuery( window ) ));

