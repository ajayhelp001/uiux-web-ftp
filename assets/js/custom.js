$(window).scroll(function(){
    if ($(this).scrollTop() > 80) {
        $('.header').addClass('active');
    } else {
        $('.header').removeClass('active');
    }
});


// **=========== Header Active Class =====
// JavaScript code to handle the active class
// $( '#navbar' ).on( 'click', function () {
// 	$( '#topheader .navbar-nav' ).find( 'li a.active' ).removeClass( 'active' );
// 	$( this ).parent( 'li' ).addClass( 'active' );
// });


// ** Glight Box
// var lightbox = GLightbox();
// lightbox.on('open', (target) => {
//     console.log('lightbox opened');
// });


$('.owl_slider').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
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

