
var idLogo;


//*************** FRAME 2 *******************
$('img.logoDisplayed').click(function(e) { // selection of the line to modify    
    $('.picker').imagepicker(); // load image picker script
    idLogo = this.id;
    $('.frame2').hide();
    $('.frame2').css({ 'top': e.pageY - 100, 'left': e.pageX });
    $('.frame2').show();

    var srcSelectedLogo;

    $('.column-right').unbind().click(function() {
        $('.frame2').hide();
        srcSelectedLogo = $('option:selected', '.picker').attr('data-img-src');
        $('img#' + idLogo + '.logoDisplayed').attr('src', srcSelectedLogo);
    });

    $('.column-center').unbind().click(function() {

        // define which logo was selected when clicking delete
        srcLogoToDelete = $('option:selected', '.picker').attr('data-img-src');
        //check if the logo to delete wasn't displayed
        var displayedLogo = $('img#' + idLogo + '.logoDisplayed').attr('src');
        if (displayedLogo == srcLogoToDelete) {
            $('img#' + idLogo + '.logoDisplayed').attr('src', 'assets/images/CISL.png');
        }
        // launch event: delete logo
        socket.emit('del logo', srcLogoToDelete);
        $("select").imagepicker(); //reinit the picker
    });
});

$('html').click(function() {
    $('.frame2').hide();
    srcSelectedLogo = $('option:selected', '.picker').attr('data-img-src');
    $('img#' + idLogo + '.logoDisplayed').attr('src', srcSelectedLogo);
});

$('.frame2').click(function(event) {
    event.stopPropagation();
});

$('img.logoDisplayed').click(function(event) {
    event.stopPropagation();
});


// ************ FRAME PICTO *******************
var idPicto;
var srcSelectedPicto;
$('img.picto').click(function(e) {
    $('.picker-picto').imagepicker();
    idPicto = this.id;
    $('.frame-picto').hide();
    $('.frame-picto').css({ 'top': e.pageY - 100, 'left': e.pageX - 400 });
    $('.frame-picto').show();

    $('#okpictobtn').unbind().click(function() {
        $('.frame-picto').hide();
        srcSelectedPicto = $('option:selected', '.picker-picto').attr('data-img-src');
        $('#' + idPicto).attr('src', srcSelectedPicto);
    });
});

$('html').click(function() {
    $('.frame-picto').hide();
    srcSelectedPicto = $('option:selected', '.picker-picto').attr('data-img-src');
    $('#picto' + idPicto + '.picto').attr('src', srcSelectedPicto);
});

$('.frame-picto').click(function(event) {
    event.stopPropagation();
});

$('.picto').click(function(event) {
    event.stopPropagation();
});

