(function($) {

    $.fn.objectifyForm = function( options ) {

        var settings = $.extend({
            'selector' : 'name'
        }, options);

        var dataObject = {},
            allowedSelectors = ['name', 'id'],
            inputs = $(this).find(':input')
                     .not(':input[type=button], :input[type=submit], :input[type=reset], :button');

        settings.selector = $.inArray(settings.selector, allowedSelectors) < 0 ? 'name' : settings.selector;

        $.each(inputs, function(i) {
            dataObject[$(inputs[i]).attr(settings.selector)] = $(inputs[i]).val();
        });

        return dataObject;
    };

}(jQuery));