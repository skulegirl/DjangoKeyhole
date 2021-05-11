    function init_editor(e) {
        var editor = $(e);
        var selector = editor.data('selector');
        var filename = '';
        editor.cropit({
            imageState: {
                src: editor.data('original-image')
            },
            $preview: editor.find('.cropit-image-preview'),
            onFileChange: function(e) {
                if (e.currentTarget.files.length) {
                    filename = e.currentTarget.files[0].name;
                }
                if (on_filechange_callback != undefined)
                    on_filechange_callback();
            }
        });
        $('.rotate-cw-btn').click(function() {
          editor.cropit('rotateCW');
        });
        $('.rotate-ccw-btn').click(function() {
          editor.cropit('rotateCCW');
        });

        $("form[class*='form']").submit(function( event ) {
            // Move cropped image data to hidden input
            var imageData = editor.cropit('export');
            $('#' + selector).val(imageData);
            $('#' + selector + "_filename").val(filename)
        });
    }

    $(document).ready(function() {
        var editors = $('.image-editor');
        $.each(editors, function(index, value) {
            init_editor(value);
        });
    });
