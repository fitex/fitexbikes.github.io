$(function() {
    var $root = $('html, body');
    $('.navbar-nav a').click(function (e) {
        e.preventDefault();
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top - 100
        }, 750, function () {
            window.location.hash = href;
        });
        return false;
    });


    // Make race bikes default
    $('.js-clickOnLoad').click();
});