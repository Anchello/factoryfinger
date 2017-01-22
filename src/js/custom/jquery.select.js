(function ( $ ) {
    $(document).ready(function(){
        var openClass = 'form-print__select--opened',
            buttonSelect = $('.form-print__select'),
            optionSelect = $('.form-print__select-item'),
            droplist = $('.form-print__select-list'),
            timeToggle = 100,
            timeEffect = 300;

        buttonSelect.on('click', function (e) {
            var droplist = $(this).children('.form-print__select-list');

            if(!$(this).hasClass(openClass)){
                $(this).addClass(openClass);
                droplist.slideDown( timeEffect );
            } else {
                $(this).removeClass(openClass);
                droplist.slideUp( timeEffect );
            }
        });

        optionSelect.on('click', function (e) {
            var textOption = $(this).text();
            var currentFieldSelect = $(this).parent().prev('.form-print__select-inner');

            currentFieldSelect.text(textOption);
            currentFieldSelect.addClass('form-print__select-inner--checked');
            e.preventDefault();
        });
    })
}( jQuery, jQuery( window ) ));
