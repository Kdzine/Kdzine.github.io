      (function($) {
  $(function() { // DOM Ready

    // Toggle navigation
    $('#nav-toggle').click(function() {
      this.classList.toggle("active");
      // If sidebar is visible:
      if ($('body').hasClass('show-nav')) {
        // Hide sidebar
        $('body').removeClass('show-nav');
      } else { // If sidebar is hidden:
        $('body').addClass('show-nav');
        // Display sidebar
      }
    });
  });
})(jQuery);


$('.collapse').on('shown.bs.collapse', function(){
  $(this).parent().find(".normal").removeClass("normal").addClass("fa-rotate-90");
}).on('hidden.bs.collapse', function(){
  $(this).parent().find(".fa-rotate-90").removeClass("fa-rotate-90").addClass("normal");
});