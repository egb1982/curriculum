 // when scrolling the navigation bar gets hidden 
 // we show a button to scroll back up to the nav bar
 $(document).on('scroll',() => {

    if ($('#iNavigation').offset().top < $(this).scrollTop()) {
        $('#iMoveUpBtn').fadeIn(1000);
    } else {
        $('#iMoveUpBtn').fadeOut(1000);
    }
});