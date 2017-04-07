/**
 * Created by kola on 2/7/2017.
 */

var current_fs, prev_fs, next_fs, counter, progress_bar, progress_user, progress_provider, counter_html, date_picker,
    progress_provider_counter, progress_user_counter, file_elem, file_btn, phone_input;

phone_input = $('#js-phone');
phone_input.intlTelInput({
    initialCountry: "auto",
    geoIpLookup: function (callback) {
        $.get('http://ipinfo.io', function () {
        }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    }
});

date_picker = new Pikaday({
    field: document.getElementById('datepicker'),
    yearRange: [1900, 2017]
});

counter = 1;

progress_user_counter = progress_user = 16.67;

progress_provider_counter = progress_provider = 7.7;

progress_bar = $('.js-progress-bar');
counter_html = $('.js-counter');

counter_html.text(counter);

function nextFormUser() {
    current_fs = $(this).parents('.js-fieldset');
    next_fs = $(this).parents('.js-fieldset').next();

    current_fs.animate({opacity: 0}, 'slow').hide();
    next_fs.animate({opacity: 1}, 'slow').show();

    progress_user = progress_user + progress_user_counter;
    progress_bar.css({width: progress_user + '%'});

    counter += 1;
    counter_html.text(counter);

}

function nextFormProvider() {
    current_fs = $(this).parents('.js-fieldset');
    next_fs = $(this).parents('.js-fieldset').next();

    current_fs.animate({opacity: 0}, 'slow').hide();
    next_fs.animate({opacity: 1}, 'slow').show();

    progress_provider = progress_provider + progress_provider_counter;
    progress_bar.css({width: progress_provider + '%'});

    counter += 1;
    counter_html.text(counter);

}

function prevFormUser() {
    current_fs = $(this).parents('.js-fieldset');
    prev_fs = $(this).parents('.js-fieldset').prev();

    current_fs.animate({opacity: 0}, 'slow').hide();
    prev_fs.animate({opacity: 1}, 'slow').show();

    progress_user = progress_user - progress_user_counter;
    progress_bar.css({width: progress_user + '%'});

    counter -= 1;
    counter_html.text(counter);

}

function prevFormProvider() {
    current_fs = $(this).parents('.js-fieldset');
    prev_fs = $(this).parents('.js-fieldset').prev();

    current_fs.animate({opacity: 0}, 'slow').hide();
    prev_fs.animate({opacity: 1}, 'slow').show();

    progress_provider = progress_provider - progress_provider_counter;
    progress_bar.css({width: progress_provider + '%'});

    counter -= 1;
    counter_html.text(counter);
}

$('.js-next-btn-user').click({progress: progress_user, progressCount: progress_user_counter}, nextFormUser);

$('.js-back-btn-user').click({progress: progress_user, progressCount: progress_user_counter}, prevFormUser);


$('.js-next-btn-provider').click({
    progress: progress_provider,
    progressCount: progress_provider_counter
}, nextFormProvider);

$('.js-back-btn-provider').click({
    progress: progress_provider,
    progressCount: progress_provider_counter
}, prevFormProvider);

$('.skip-profile').hide();
$('.profile-form-container').hide();

$('#finish-btn').click(function () {
    $('.register-form').animate({opacity: 0}, 'slow').hide();
    $('.progress-indicator-container').animate({opacity: 0}, 'slow').hide();
    $('.skip-profile').animate({opacity: 1}, 'fast').show()
});

$('#complete-profile-btn').click(function () {
    $('.profile-form-container').animate({opacity: 1}, 'fast').show();
    $('.skip-profile').hide();
});

$('form').bind('keypress', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
})
