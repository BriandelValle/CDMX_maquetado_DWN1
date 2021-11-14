$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-gl').show('1000');
        } else {
            $('.cont-gl').not('.' + valor).hide('1000');
            $('.cont-gl').filter('.' + valor).show('1000');
        }
    });

    let descubre_mexico = $('#descubre_mexico').offset().top,
        museos = $('#museos').offset().top,
        excursiones = $('#excursiones').offset().top,
        eventos = $('#eventos').offset().top,
        galeria = $('#galeria').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let descubre_mexico = $('#descubre_mexico').offset().top
        museos = $('#museos').offset().top,
        excursiones = $('#excursiones').offset().top,
        eventos = $('#eventos').offset().top,
        galeria = $('#galeria').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-descubre_mexico').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: museos -100
        },600);
    });

    $('#enlace-museos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: museos -100
        },600);
    });

    $('#enlace-excursiones').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: excursiones -100
        },600);
    });

    $('#enlace-eventos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: eventos -100
        },600);
    });

    $('#enlace-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: eventos -100
        },600);
    });

    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });
});