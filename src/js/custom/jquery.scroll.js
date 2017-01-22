(function( $, g ) {
    $(document).ready(function(){
        var scroll_button = $( '.scroll-to' );

        if ( scroll_button.length > 0 ) {
            scroll_button.on('click', function( e ) {
                eventScrollTo( $(this), e );

                e.preventDefault();

                return false;
            });
        }

        function scrollTo( target, time ) {
            var body = $( 'html, body' ),
                target = $( target );

            console.log(time);

            if ( target.length > 0 ) {
                body.animate({
                    scrollTop: $( target ).offset().top
                }, time);
            }
        };

        function eventScrollTo( button, e ) {
            var page,
                button = $( button ),
                target = button.attr( 'href' ),
                base = $( 'base' ).attr( 'href' ),
                current_page = location.pathname,
                currentPosition = button.offset().top,
                scrollTime = currentPosition / 3;

            if ( target.substr( 0, 1 ) !== '#' ) {
                base = base.substr( base.indexOf( '/', 10 ) );
                page = base + target.substr( 0, target.lastIndexOf( '/' ) + 1 );

                if ( page !== current_page ) {
                    location.replace( base + target );
                } else {
                    target = target.substr( target.lastIndexOf( '/' ) + 1 );

                    console.log(target);

                    scrollTo( target, scrollTime );
                }
            } else {
               scrollTo( target, scrollTime );
            }

            e.preventDefault();

            return false;
        }
    })
}( jQuery, jQuery( window ) ));
