$('.dropdown-hover').mouseenter(function () {
    $(this).addClass('show');
    $(this).attr('aria-expanded','true');
    $('.dropdown-hover>.dropdown-hover-menu').addClass('show');
});
$('.dropdown-hover').mouseleave(function () {
    $(this).addClass('show');
    $(this).attr('aria-expanded','true');
    $('.dropdown-hover>.dropdown-hover-menu').removeClass('show');
});