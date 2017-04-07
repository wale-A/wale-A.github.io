/**
 * Created by kola on 4/7/2017.
 */
$(function () {

    var docWindow = $(window);
    var navigation = $('#landing-page-navigation');
    var logo = navigation.find('#app-logo');
    var navLinks = navigation.find('#navigation-bar').find('.nav-link > a');

    if (docWindow.width() > 320) {
        docWindow.scroll(function() {
            if (docWindow.scrollTop() > 0) {
                navigation.css({
                    background: '#fff',
                    boxShadow: '0 1px 1px rgba(0,0,0,.1)'
                });
                logo.attr({src: 'img/blue-logo.png'});
                navLinks.css({color: '#777'})
            }

            else {
                navigation.css({
                    background: 'transparent',
                    boxShadow: 'none'
                });
                logo.attr({src: 'img/white-logo.png'});
                navLinks.css({color: '#fff'})
            }
        })
    }

    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});