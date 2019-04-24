"use strict";

$(document).ready(function() {

    $('.wpg-header-counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(".wpg-slider-wrap").lightSlider({
    	item: 1,
    	autoWidth: false,
    	slideMove: 1,
    	slideMargin: 0,
    	loop: true,
    	auto: true,
    	controls: true,
        pager: false,
        pause: 6000,
    });

    $(".wpg-team-slider").lightSlider({
        item: 5,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 0,
        loop: true,
        auto: true,
        controls: false,
        pager: false,
        pause: 6000,

        responsive : [
            {
                breakpoint: 1170,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:0,
                  }
            },
            {
                breakpoint: 960,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:0,
                  }
            },
            {
                breakpoint: 640,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:0,
                  }
            },
            {
                breakpoint: 480,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:0,
                  }
            }
        ]
    });

    $(".wpg-layout-1 .wpg-testinomial-slider").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 30,
        loop: true,
        auto: true,
        controls: false,
        pager: false,
        pause: 6000,

        responsive : [
            {
                breakpoint: 1024,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:20,
                  }
            },
            {
                breakpoint: 640,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:0,
                  }
            }
        ]
    });
    $(".wpg-layout-2 .wpg-testinomial-slider").lightSlider({
        item: 2,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 30,
        loop: true,
        auto: true,
        controls: false,
        pager: false,
        pause: 6000,

        responsive : [
            {
                breakpoint: 1024,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:20,
                  }
            },
            {
                breakpoint: 640,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:0,
                  }
            }
        ]
    });        

    $(".logo-slider").lightSlider({
        item: 5,
        autoWidth: false,
        slideMove: 1,
        slideMargin: 0,
        loop: true,
        auto: true,
        controls: false,
        pager: false,

         responsive : [
            {
                breakpoint: 1024,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:20,
                  }
            },
            {
                breakpoint: 768,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:20,
                  }
            },
            {
            breakpoint: 480,
            settings: {
                item:1,
                slideMove:1,    
                slideMargin:0,
              }
            }
        ]
    });

    /* SEARCH POPUP */
    $('.wpg-search').on('click', function(){
        if($(this).hasClass('wpg-show')){
            $(this).removeClass('wpg-show');
        }
        else{
            $(this).addClass('wpg-show');
        }
    });

    $(document).mouseup(function(e){
        var container = $(".wpg-search");
        if (!container.is(e.target) && container.has(e.target).length === 0){
            container.removeClass('wpg-show');
        }

    });
    
    /* ACCORDIN JS */
    
    $('.wpg-accordin').on('click', '.card .wpg-acc', function(){
        var $this = $(this);
        if($this.closest('.card').hasClass('wpg-open')){
            $this.closest('.card').removeClass('wpg-open');
        }
        else{
            $this.closest('.card').addClass('wpg-open');
        }
    });

    

    /* fixed header */
  //  $(function(){
     var shrinkHeader = 200;
      $(window).scroll(function() {
        var scroll = getCurrentScroll();
          if ( scroll >= shrinkHeader ) {
               $('.fixed-header').addClass('fixed-nav');
            }
            else {
                $('.fixed-header').removeClass('fixed-nav');
            }
   //   });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

    /* NAV TOGGLE */

    $('body').on('click','.navbar-toggle',function(){
        $('.wpg-nav-2').addClass('wpg-active-nav');
    });

    $('body').on('click','.wpg-nav-2 .wpg-close',function(){
        $('.wpg-nav-2').removeClass('wpg-active-nav');
        
    });

    /* WOW JS */

   var wow = new WOW(
        {
          mobile: false,       // default
        }
    )
    wow.init();


   /* progress bar JS */

    
   $("[data-appear-progress-animation]").each(function () {
       var $this = $(this);

       $this.appear(function () {
           var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);

           if (delay > 1) $this.css("animation-delay", delay + "ms");
           $this.addClass($this.attr("data-appear-animation"));

           setTimeout(function () {
               $this.animate({
                   width: $this.attr("data-appear-progress-animation")
               }, 1500, "easeOutQuad", function () {
                   $this.find(".progress-bar-tooltip").animate({
                       opacity: 1
                   }, 500, "easeOutQuad");
               });
           }, delay);
       }, { accX: 0, accY: -50 });
   });

    /* superfish js*/ 
    
    jQuery('ul.nav').superfish();   

    
    
 });