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
		$('#mainNav').affix({
				offset: {
						top: 1
				}
		})

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

		// Astral Talent
		
		$('#myModal').on('hidden.bs.modal', function () {
				$(this).removeData('bs.modal');
				$(this).find('.modal-body').html('');
		});

		var $btns = $('.btn').click(function() {
			if (this.id == 'all') {
				$('#portfolio-items > li').fadeIn(450);
			} else {
				var $el = $('.' + this.id).fadeIn(450);
				$('#portfolio-items > li').not($el).hide();
			}
			$btns.removeClass('current');
			$(this).addClass('current');
		});

		// Flexslider Plugin
		 
		// store the slider in a local variable
		var $window = $(window),
			flexslider;

		// tiny helper function to add breakpoints
		function getGridSize() {
				return (window.innerWidth < 700) ? 1 :
							 (window.innerWidth < 1000) ? 2 : 3;
		}

		$(function() {
				SyntaxHighlighter.all();
		});

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
						minItems: getGridSize(), // use function to pull in initial value
						maxItems: getGridSize() // use function to pull in initial value
				});
		});

		// check grid size on resize event
		$window.resize(function() {
				var gridSize = getGridSize();

				flexslider.vars.minItems = gridSize;
				flexslider.vars.maxItems = gridSize;
		});

})(jQuery); // End of use strict
