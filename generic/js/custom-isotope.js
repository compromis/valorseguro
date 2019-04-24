$(document).ready(function() {
/* ISOTOPE */
    var $isotope = $('.wpg-isotop-images').isotope();
    $('.wpg-selector').click(function(){
        var $this = $(this);
        $('.wpg-selector').removeClass('wpg-active');
        $this.addClass('wpg-active');
        var selector = $this.data('selected');
        $isotope.isotope({filter: '.'+selector});
    });
  });   