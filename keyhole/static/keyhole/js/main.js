    function init_editor(e) {
        var editor = $(e);
        var selector = editor.data('selector');
        editor.cropit({
            imageState: {
                src: editor.data('original-image')
            },
            onFileChange: function() {
                if (on_filechange_callback != undefined)
                    on_filechange_callback();
            }
        });

        $("form[class*='form'").submit(function( event ) {
            // Move cropped image data to hidden input
            var imageData = editor.cropit('export');
            $('#' + selector).val(imageData);
            filename = $('#' + selector + "_originalfile").val()
            $('#' + selector + "_filename").val(filename)
        });
    }

    $(document).ready(function() {
        var editors = $('.image-editor');
        $.each(editors, function(index, value) {
            init_editor(value);
        });
    });

