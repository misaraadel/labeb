//edit the navbar toggler 
//this function for open the navbar
$(document).ready(function(){
    $('.navigation-toggler').click(function(){
        $('ul').addClass('show');
    });
});
//this function for close the navbar
$(document).ready(function(){
    $('.close-icon').click(function(){
        $('ul').removeClass('show');
    });
});
//end edit the navbar toggler 
//this fuction for contact us page
$(document).ready(function(){
    $('.contact-us-button').click(function(){
        $('.contact-us').addClass('active');
    });
    $('.close-button').click(function(){
        $('.contact-us').removeClass('active');
    });
});
//company project work owl carousel plugin 
$('.company-project-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
//the cards for the number of clients section 
$('.number-clients-cards-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
/*strat the button from bottom to top*/

$(document).ready(function(){
    $(window).scroll(function(){
        if( $(this).scrollTop() > 700 )
        {
            $(".scroll-top-button").fadeIn();
        }else
        {
            $(".scroll-top-button").fadeOut();
        }

    });
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 500 );
    });
});
/*start the loading page */
$(window).on("load", function(){
    $(".loading-page")
    .fadeOut(2000 , function(){
        $("body").css("overflow" , "auto");
        $("this").fadeOut(1500 , function(){
            $(this).remove();
        });
    });
});