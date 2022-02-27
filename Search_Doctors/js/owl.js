
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        
        responsiveClass:true,

        responsive:{
            0:{
                items:1,
                nav:true
            },
            1315:{
                items:2,
                nav:true
            },
            1500:{
                items:3,
                nav:true,
                loop:true,
                mergeFit:true
            }
        }
    });



    $('.owl-two').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        
        responsiveClass:true,

        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true,
                mergeFit:true
            }
        }
    });


