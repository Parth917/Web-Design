var windowWidth;
$(document).ready(function () {
    
    windowWidth = $(window).width();
    headerContainer();
    footerToggle();    
    hederdropdown();    
    

    $('.dropdowns-item-toggle .title').click( function(){
        $(this).next('.categ-menu').slideToggle("slow").parent().siblings("div").find(".categ-menu:visible").slideUp("slow");
        $(this).parent().siblings("div").find(".title").removeClass("show");
        $(this).toggleClass("show");
    })

    $('.left-dropdown  .fa-minus').click( function(){
        $(this).parent().next('.left-menu-toggle').slideToggle("slow");
        $(this).parent().toggleClass('plus-icon')
    })

    $('.navbar-toggler').click(function () {
        $("body").addClass("menu-open");
    })

    $('.fa-times').click(function () {
        $("body").removeClass("menu-open");
        $('.navbar-toggler').trigger;
    })

    /* left menu open */
    $('.fillter-button').click(function () {
        $("body").addClass("left-menu-open");
    })
    $('.apply-button').click(function () {
        $("body").removeClass("left-menu-open");
        $('.left-menu').trigger;
    })

});
$(window).resize(function () {
    windowWidth = $(window).width();
    headerContainer();
    footerToggle();
    hederdropdown();

});

function headerContainer() {
    var headerOffset = $('.header-bottom .container').offset().left + 12;
    $(".register").css({
        'margin-right': '-' + headerOffset + 'px',
        'padding-right': + headerOffset + 'px',
    });
}

function footerToggle(e) {
    $('.menu-toggle .fa-chevron-down').on('click', function () {
        if (windowWidth < 992) {
            
            $(this).parent().next('.toggle-content').slideToggle("slow").parent().parent().siblings("div").find(".toggle-content:visible").slideUp("slow");
            e.preventDefault();
        } else {
            e.preventDefault();
        }
    });

}

function hederdropdown(e){
    $('.header-bottom .nav-link').on('click', function() {
        if(windowWidth < 992){
            $(this).next('.dropdown-menu').slideToggle('slow').parent().siblings('.nav-item').find('.dropdown-menu:visible').slideUp('slow');
            e.preventDefault()
        }  else {
            e.preventDefault();
        }
    })
}