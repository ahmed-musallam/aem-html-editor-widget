$(document).on("dialog-ready", function() {
    // the hidden input
    var $hidden = $('input#hidden-html-editor');
    // if the hidden input is not in the dialog, return without executing the rest of this code.
    if(!$hidden.length) return;

    var initialCode = $hidden.val();

    var flask = new CodeFlask();
    flask.run('div#html-editor-wrapper', { language: 'markup', lineNumbers: true });
    // insert initial code.
    flask.update(initialCode);
    // whne code is updated, update hidden input field.
    flask.onUpdate(function(code) { $hidden.val(code); });
});