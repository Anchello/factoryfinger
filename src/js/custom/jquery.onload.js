(function ( $ ) {
    $(document).ready(function(){
        var loadMain = $( '.form__load' ),
            loadPrint = $('.form-print__load');

        function onloadFile(wrapper) {

            var input = wrapper.find( 'input' ),
                button = wrapper.find( '.load-text' ),

                fileApi = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

            input.change(function(){
                var fileName;
                if( fileApi && input[ 0 ].files[ 0 ] ) {
                    fileName = input[ 0 ].files[ 0 ].name;
                } else {
                    fileName = input.val().replace( "C:\\fakepath\\", '' );
                }

                if( ! fileName.length ) {
                    return;
                }

                button.text( 'Я приложил файл: ' + fileName );
            });
        }

        onloadFile(loadMain);
        onloadFile(loadPrint);
    });
}( jQuery, jQuery( window ) ));