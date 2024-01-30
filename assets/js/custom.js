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


$('.owl_slider').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
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

$('.brand_slider').owlCarousel({
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


// **Copyright Year
document.querySelector('.year').innerText = new Date().getFullYear();