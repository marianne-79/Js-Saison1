// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    
    let currentSlideIndex = 0;

    function displaySlide() {
        var file = gallery[ currentSlideIndex ];
        document.getElementById("img").src = gallery;
    }

    currentSlideIndex++;
    if( currentSlideIndex >= gallery.length ) {
        currentSlideIndex = 0;
    }
displaySlide();


})();
