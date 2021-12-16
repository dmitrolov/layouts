$( document ).ready(function() {

    var connectionCarousel = setInterval(function() {
        $('section.connection .tab-wrapper').toggleClass("hidden active");
    }, 5000)

});