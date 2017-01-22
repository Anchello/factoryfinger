(function ( $ ) {
    $(document).ready(function(){
        function stretchPage() {
            var pageHeight = $( '.page__wrapper' ).outerHeight(),
                headerHeight = $( '.header' ).outerHeight(),
                footerHeight = $( '.footer' ).outerHeight(),
                contacts = $('.contacts'),
                currentHeight = contacts.outerHeight(),
                screenHeight = $( window ).outerHeight(),
                newHeight = screenHeight - headerHeight - footerHeight;

            if (contacts.length > 0) {
                if (screenHeight > pageHeight) {
                    contacts.css( 'height', newHeight );
                } else {
                    contacts.css( 'height', 'auto' );
                }
            }
        }

        $('textarea').autoResize({
            extraSpace : 0,
            limit: 1000
        });

        $( window ).on('load', stretchPage);

        $( window ).on('resize', stretchPage);
    })
}( jQuery, jQuery( window ) ));
