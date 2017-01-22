(function( $, g ) {
    var Accordion = function() {
        this.buttons = $( '.faq__subtitle' );
    };

    Accordion.prototype = {
        init: function() {
            var context = this;

            if ( this.buttons && this.buttons.length > 0 ) {
                this.buttons.on('click', function() {
                    context.eventChange.call( context, $( this ) );
                });
            }
        },

        eventChange: function( button ) {
            button.next( 'div' ).slideToggle( 350 );
        }
    };

    var accordion = new Accordion();

    accordion.init();
}( jQuery, jQuery( window ) ));
