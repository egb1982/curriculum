 // when scrolling the navigation bar gets hidden 
 // we show a button to scroll back up to the nav bar
let lastScroll = 0;

document.addEventListener('scroll', (ev) => {
    
    const button = document.getElementById('iMoveUpBtn');
    const scrollTop = window.scrollY;

    if (scrollTop < lastScroll) {
         // upscroll
        const navigation =  document.getElementById('iNavigation');
        if (button.classList.contains("d-none")){
            button.classList.remove('d-none');
        }
        if (navigation.offsetTop < scrollTop) {
            if (!button.classList.contains("fadeIn")) {
                button.classList.remove('fadeOut');
                button.classList.add('fadeIn');
            }
        } else {
            if (!button.classList.contains("fadeOut")) {
                button.classList.remove('fadeIn');
                button.classList.add('fadeOut');
            }
        }
    } else {
         //downscroll
         if (!button.classList.contains("fadeOut")) {
            button.classList.remove('fadeIn');
            button.classList.add('fadeOut');
         }
     }

    lastScroll = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});