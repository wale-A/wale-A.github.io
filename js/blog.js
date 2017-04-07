/**
 * Created by kola on 1/30/2017.
 */
$(function () {
    var $topBtn = $('.js-top-btn');
    var $composeBtn = $('.js-compose-btn');
    var $docWindow = $(window);
    var $blogNav = $('#blog-navigation');
    var $categoryNavContainer = $('.category-nav-container');
    var $categoryNav = $('.category-nav');
    var $categoryLink = $('.category-link-container');
    var $searchOverlayOpen = $('.js-search-open');

    var categoryWidth = $categoryLink.width() * $categoryLink.length;

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

    if ($categoryLink.length <= 3) {
        categoryWidth = categoryWidth + 500;
        $categoryNav.css('width', categoryWidth);
    }
    else {
        $categoryNav.css('width', categoryWidth);
    }

    if ($categoryNavContainer.width() > $categoryNav.width()) {
        $categoryNavContainer.css('overflow-x', 'hidden');
        $categoryNav.css('padding-bottom', '0')
    }
    else {
        $categoryNavContainer.css('overflow-x', 'scroll');
        $categoryNav.css('padding-bottom', '10px')

    }

    $('[data-toggle="tooltip"]').tooltip();

    $('[data-toggle="popover"]').popover({html: true});
    $blogNav.find('#blue-logo').hide();

    $docWindow.scroll(function () {
        $topBtn.css({
            display: 'block'
        });
        $composeBtn.css({
            display: 'block'
        });

        $blogNav.css({background: '#fff', boxShadow: '0 1px 4px rgba(0, 0, 0, .04)'});
        $blogNav.find('#login-link').css({color: '#777'});
        $blogNav.find('#blog-link').css({color: '#777'});
        $blogNav.find('#log-out-link').css({color: '#777'});
        $blogNav.find('#blue-logo').show();
        $blogNav.find('#white-logo').hide();

        if ($docWindow.scrollTop() === 0) {
            $topBtn.css('display', 'none');
            $composeBtn.css('display', 'none');
            $blogNav.css({background: 'transparent', boxShadow: 'none'});
            $blogNav.find('#blue-logo').hide();
            $blogNav.find('#white-logo').show();

            if ($docWindow.width() > 320) {
                $blogNav.find('#blog-link').css({color: '#fff'});
                $blogNav.find('#log-out-link').css({color: '#fff'});
                $blogNav.find('#login-link').css({color: '#fff'});

            }
        }

        // Ajax call for loading more blog posts
        /*$('.js-loader').hide();
         if (element_in_scroll('.blog-post:last')) {
         $('.js-loader').show();

         $.ajax({
         url: '/get-post',
         success: function (html) {
         $('#posts').append(html);
         $('#loading').hide();
         }
         });
         }*/

        // Ajax call for loading more comments
        /*$('.js-loader').hide();
         if (element_in_scroll('.comment-div:last')) {
         $('.js-loader').show();

         $.ajax({
         url: '/get-comments',
         success: function (html) {
         $('.comments').append(html);
         $('#loading').hide();
         }
         });
         }*/
    });

    $topBtn.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });

    $searchOverlayOpen.click(overlayDisplay);

    function element_in_scroll(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function overlayDisplay() {
        $('.search-overlay').toggleClass('show-search-overlay');
    }

});