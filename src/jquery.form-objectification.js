(function($) {

    $.fn.objectifyForm = function( options ) {

        var settings = $.extend({
            'selector'       : 'name',
            'exclude'        : [],
            'checkboxesAll'  : true,
            'checkboxesData' : 'boolean'
        }, options);

        var dataObject = {},
            allowedSelectors = ['name', 'id'],
            inputs = $(this).find(':input')
                .not(':input[type=button], :input[type=submit], :input[type=reset], :button');

        settings.selector = $.inArray(settings.selector, allowedSelectors) < 0 ? 'name' : settings.selector;

        $.each( inputs, function(i) {
            var include = true;

            if ( settings.exclude.length ) {
                if ( $.inArray($(inputs[i]).attr('name'), settings.exclude) > -1 ) {
                    include = false;
                }
                else {
                    $.each(settings.exclude, function (key, value) {
                        if ( ( ( value.substring(0, 1) == '#' ) && ( '#' + $(inputs[i]).attr('id') == value ) ) ||
                            ( ( value.substring(0, 1) == '.' ) && ( $(inputs[i]).hasClass(value.replace('.', '')) ) ) ) {
                            include = false;
                        }
                    });
                }
            }

            if ( include ) {
                if ( $(inputs[i]).is(':checkbox') ) {
                    if ( settings.checkboxesAll ) {
                        if ( settings.checkboxesData === 'boolean' ) {
                            dataObject[$(inputs[i]).attr(settings.selector)] = $(inputs[i]).is(':checked') ? 1 : 0;
                        }
                        else {
                            dataObject[$(inputs[i]).attr(settings.selector)] = $(inputs[i]).val();
                        }
                    }
                    else if ( $(inputs[i]).is(':checked') ) {
                        dataObject[$(inputs[i]).attr(settings.selector)] = 1;
                    }
                }
                else {
                    dataObject[$(inputs[i]).attr(settings.selector)] = $(inputs[i]).val();
                }
            }

        });

        return dataObject;
    };

}(jQuery));
