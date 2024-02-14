// window.onload = function(){
// 	setTimeout(function(){
// 	var loader = document.getElementsByClassName("loader")[0];
// 	loader.className="loader fadeout" ;
// 	setTimeout(function(){loader.style.display="none"},1000)
// 	},1000)
// }

$(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
});

// ** Glight Box
var lightbox = GLightbox();
lightbox.on('open', (target) => {
    console.log('lightbox opened');
});


$('.owl-slider').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    autoplay:true,
    autoplayTimeout:3000,
    lazyLoad: true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        767:{
            items:1,
            nav:true,
        },
        1000:{
            items:1,
            nav:true,
        }
    }
})

$('.brand-slider').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:false,
    autoplay:true,
    lazyLoad: true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
        },
        767:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
})

