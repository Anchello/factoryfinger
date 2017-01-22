(function ($) {
  function makeNiceInputs() {
      $( ".form-print__input" ).on( "click", function() {
        $(this).find('.form-print__inner').focus();
      });

      var $form = $('.form-print'),
          $submitBtn= $('.form-print__submit'),
          $inners= $form.find('.form-print__inner');

      function getElementContent (element) {
        return element.options
            ? element.options[element.selectedIndex].text
            : element.innerHTML;
      };

      function toggleSubmit (state) {
          $submitBtn.prop('disabled', state);
      };

      function showErrorElement (element) {
        $(element).parent().addClass('form-print__input--error');
        setTimeout(function () {
          $(element).parent().removeClass('form-print__input--error');
          toggleSubmit(false);
        }, 2000);
      };

      function recalcBorders (e) {
        var parent = e.target.parentNode;
        if (e.target.innerHTML.length < 10) {
          $(parent).removeClass('span-border');
        } else {
          $(parent).addClass('span-border');
        }

        if( (e.charCode == 13) || (e.keyCode == 13) || (e.which == 13) ) {
          return false;
        }
      };

      $inners.on("keypress.nice keyup.nice change.nice", recalcBorders);

      // submit gift form
      $form.submit(function() {

        toggleSubmit(true);

        var hiddenParams = [],
            readyToSend = true;

        $.each($inners, function (i, element) {
          if (!getElementContent(element) && !$(element).hasClass('ignore')) {
            showErrorElement(element);
            // if it's necessary, shake it
            // $submitBtn.effect('shake', {timer: 1, distance: 3}, 10);
            readyToSend = false;
            return;
          }
          hiddenParams.push(element);
        });

        if (readyToSend) {
          $.each(hiddenParams, function (i, el) {
            $('<input />').attr('type', 'hidden')
                .attr('name', el.getAttribute('name'))
                .attr('value', getElementContent(el))
                .appendTo($form);
          });
          debugger;
        }

        return readyToSend;
      });
    };

  $(document).ready(function(){
    makeNiceInputs();
  });
} ( jQuery ));