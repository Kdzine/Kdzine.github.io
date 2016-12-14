(function($) {
		"use strict"; // Start of use strict

		// jQuery for page scrolling feature - requires jQuery Easing plugin
		$('a.page-scroll').bind('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
						scrollTop: ($($anchor.attr('href')).offset().top - 50)
				}, 1250, 'easeInOutExpo');
				event.preventDefault();
		});

		// Highlight the top nav as scrolling occurs
		$('body').scrollspy({
				target: '.navbar-fixed-top',
				offset: 51
		});

		// Closes the Responsive Menu on Menu Item Click
		$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
				$('.navbar-toggle:visible').click();
		});

		// Offset for Main Navigation
		$('#mainNav').affix({ offset: { top: 1 } })

		// Initialize and Configure Scroll Reveal Animation
		window.sr = ScrollReveal();
		sr.reveal('.sr-icons', {
				duration: 600,
				scale: 0.3,
				distance: '0px'
		}, 200);
		sr.reveal('.sr-button', {
				duration: 1000,
				delay: 200
		});
		sr.reveal('.sr-contact', {
				duration: 600,
				scale: 0.3,
				distance: '0px'
		}, 300);

		// store the slider in a local variable
		var $window = $(window), flexslider;

		// tiny helper function to add breakpoints
		function getGridSize() {
				return (window.innerWidth < 700) ? 1 :
							 (window.innerWidth < 1000) ? 2 : 3;
		}

		$(function(){ SyntaxHighlighter.all(); });

		// Flexslider Plugin
		$window.load(function() {
			$('.perks').flexslider({
				animation: "slide",
				animationLoop: true,
				slideshowSpeed: 10000,
				animationSpeed: 800,
				directionNav: true,
				controlNav: true,
				useCSS: false,
				itemWidth: 350,
				minItems: getGridSize(),
				maxItems: getGridSize()
			});
		});

		// check grid size on resize event
		$window.resize(function() {
				var gridSize = getGridSize();

				flexslider.vars.minItems = gridSize;
				flexslider.vars.maxItems = gridSize;
		});

		// Select2 for Career Filtering
		$("#filter-select").select2({
			placeholder: "SELECT A FILTER",
			allowClear: true
		});

		// Careers Filter
		$('#filter-select').change(function() {
		  var category = $(this).val();
		  if (category === 'all') {
		    $('#portfolio-items > li').fadeIn(450);
		  } else {
		    $('#portfolio-items > li').fadeIn(450);
		    $('#portfolio-items > li').not('.' + category).hide();
		  }
		});

})(jQuery); // End of use strict
