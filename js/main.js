//BURGER
$(document).ready(function () {
    function burger(item) {
        let menu = $(item);
        let btn = menu.find('.burger__btn');
        let links = menu.find('.burger__nav__link');

        btn.on('click', function (e) {
            e.preventDefault();
            toggleMenu();
        });
        links.on('click', function () { toggleMenu() });

        function toggleMenu() {
            menu.toggleClass('header__burger_active');
        }


    }
    burger('.header__burger')
});

//SCROLL
$(document).ready(function () {
    $('a.scrollto').click(function () {
        elementClick = $(this).attr('href')
        destination = $(elementClick).offset().top;
        $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, 1100);
        return false;
    });
});

//SLIDER

$(document).ready(function () {
    $('.header__slider').slick({
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
    });

    let b;

    if ($(window).width() < 1266 && $(window).width() > 800) b = 2;
    if ($(window).width() < 800) b = 1;
    if ($(window).width() > 1266) b = 3;

    $('.news__slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true,
        slidesToShow: b,
        centerMode: true,
        centerPadding: '-30px'
    });

    $(window).resize(function () {
        let a = $(window).width();
        if (a < 1266 && a > 800) {
            b = 2
            $('.news__slider').slick("slickSetOption", "slidesToShow", b, true);
        };
        if (a < 800) {
            b = 1;
            $('.news__slider').slick("slickSetOption", "slidesToShow", b, true);
        };
        if (a > 1266) {
            b = 3;
            $('.news__slider').slick("slickSetOption", "slidesToShow", b, true);
        };
    });
});

//MAP
function initMap() {
   
    const firmLocation = { lat: 40.682860, lng: -73.895481 };
    const mapCenter = { lat: 40.644879, lng: -73.882688 }
    const mapOption = {
        zoom: 12,
        center: mapCenter}
      
    let map = new google.maps.Map(
        // document.getElementById('map'), { zoom: 12, center: mapCenter });
        document.getElementById('map'), mapOption);
    map.setMapTypeId('terrain');
  
   let marker = new google.maps.Marker({
        position: firmLocation,
        map: map,
        icon: 'img/map/marker.png'
    });
}