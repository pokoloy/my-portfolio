// $(document).ready(function(){
//     $(".toggle").click(function() {
//         $(".nav-bars").slideToggle();
//     });
// });



$(document).ready(function(){

    //** -- for navigation -- **//
    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
            $('nav').addClass('nav-bg');
        } else {
            $('nav').removeClass('nav-bg');
        }
    });

    $(".toggle").click(function() {
        $(".nav-section div").toggleClass("active");
    });

    $('div .nav-bars li a').click(function() {
        $('div .nav-bars li a').removeClass('active');
        $(this).addClass('active');
    });

    //** -- for navigation -- **//

    //** --for skills- progressbar-- **/
    $('.html').animate({width:'90%'}, 2000);
    $('.css').animate({width:'90%'}, 2000);
    $('.js').animate({width:'85%'}, 2000);
    $('.react').animate({width:'80%'}, 2000);
    $('.jquery').animate({width:'80%'}, 2000);
    $('.sass').animate({width:'90%'}, 2000);
    $('.boot').animate({width:'75%'}, 2000);
    $('.ps').animate({width:'70%'}, 2000);
    $('.git').animate({width:'80%'}, 2000);
    $('.cplus').animate({width:'80%'}, 2000);
    //** --for skills- progressbar-- **/


    //** -- for portfolio using isotope -- **//
    $('.portfolio-content').isotope({
        itemSelector: '.card',
        layoutMode: 'fitRows',
        percentPosition: true,
        fitRows: {
        gutter: '.gutter-sizer'
        }
    });

    $('.portfolio-menu ul li a').click(function() {
        $('.portfolio-menu ul li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.portfolio-content').isotope({
            filter: selector
        });
        return false;
    });

    //** -- for portfolio using isotope -- **//

  });