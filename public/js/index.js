 // when scrolling the navigation bar gets hidden 
 // we show a button to scroll back up to the nav bar
let lastScroll = 0;

 $(document).on('scroll',() => {

    let st = $(this).scrollTop();
    console.log(st,lastScroll,$('#iDownloads').offset().top);
    if (st < lastScroll){
         // upscroll
        if ($('#iNavigation').offset().top < st) {
            $('#iMoveUpBtn').fadeIn(1000);
        } else {
            $('#iMoveUpBtn').fadeOut(1000);
        }
     } else {
         //downscroll
         $('#iMoveUpBtn').fadeOut(1000);
     }

    lastScroll = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});