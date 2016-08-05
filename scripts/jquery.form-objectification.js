(function($) {

    $.fn.objectify = function( options ) {

        var settings = $.extend({
            'form' : 'form',
            'selector' : 'name'
        }, options);

        var dataObject = {},
            allowedSelectors = ['name', 'id'],
            inputs = $(settings.form + ' :input')
                     .not(':input[type=button], :input[type=submit], :input[type=reset], :button');

        settings.selector = $.inArray(settings.selector, allowedSelectors) < 0 ? 'name' : settings.selector;

        $.each(inputs, function(i) {
            dataObject[$(inputs[i]).attr(settings.selector)] = $(inputs[i]).val();
        });

        return dataObject;
    };

}(jQuery));