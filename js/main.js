$('.testimonials p').each(function () {
    var $paragraph = $(this);
    var $buttons = $paragraph.find('.tggl');
    $buttons.on('click', function () {
        $buttons.removeClass('active');
        $(this).addClass('active');
    });
});

$('#show').on('click', function () {
    $(this).slideUp()
    $('.testimonials.--hidden').slideDown();
});

function hideModals() {
    $('.modal').removeClass('is_active').fadeOut(300);
    $('body').removeClass('is_active');
};

$(function () {
    function showModal(id) {
        $(id + ', body').addClass('is_active');
        $(id).fadeIn(300);
    }

    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal-close').on('click', () => { hideModals(); });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).hasClass('mod')) ||
            ($(e.target).hasClass('modal-content'))
        )) {
            hideModals();
        }
    });
});


$('#download').on('click', function (e) {
    e.preventDefault();
    var button = $(this);
    $(button).addClass('active');
    button.text('Installing...');
    var href = $(this).attr('href');
    setTimeout(function () {
        button.text('Install');
        console.log(href);
        startDownload(href);
        $(button).removeClass('active');
    }, Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000);
});


function startDownload(url) {
    var link = document.createElement('a');
    link.href = url;
    link.download = 'App';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}