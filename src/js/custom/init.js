(function() {
    var nav = document.querySelector( '.startscreen__nav-list' );
    if (nav) {
        var hammertime = new Hammer(nav, { direction: Hammer.DIRECTION_HORIZONTAL } );
    }

    window.addEventListener( 'load', initMoveNav );

    function initMoveNav() {
        if (nav) {
            moveLeft();
            moveRight();
        }
    }

    function moveLeft() {
        var position = 0;

        hammertime.on('panleft', function() {
            if (nav.style.left) {
                var posirionLeft = nav.style.left;
                var posirionL = posirionLeft.substring(0, posirionLeft.length - 1);
            } else {
                nav.style.left = '0%';
                posirionL = 0;
            }

            if ( (-1) * posirionL < 70  ) {
                nav.style.left = ( (-1) * position)  + '%';
                position++;
            } else {
                position = 0;
            }
        });
    }

    function moveRight() {
        hammertime.on('panright', function() {
            if (nav.style.left) {
                var posirionLeft = nav.style.left;
                var posirionL = posirionLeft.substring(0, posirionLeft.length - 1);
            } else {
                nav.style.left = '0%';
                posirionL = 0;
            }

            if ( posirionL < 0  ) {
                posirionL++;
                nav.style.left = posirionL  + '%';
            } else {
                posirionL = 0;
            }
        });
    }
}());