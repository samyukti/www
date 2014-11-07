$(document).ready(function(){

	"use strict";

	////////////////////// Initialize Sliders

	$('.slider').flexslider({
		directionNav: false
	});

	$('.testimonials-slider').flexslider({
		animation: "slide",
		slideshow: true,
		controlNav: false,
	});

	$('.work-slider').flexslider({
		directionNav: false,
		animation: "slide"
	});

	$('#featured-work-slider').flexslider({
		slideshow: false,
		directionNav: false,
		animation: "slide"
	});


	////////////// Initialize Smooth Scroll (for back to top button)

	$(".scroll").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});


	////////////////////// Isotope Masonry

		// filter items when filter link is clicked

	$('#twocol-filters a').click(function(){
		$('#twocol-filters li').removeClass('active-filter');
		$(this).parent().addClass('active-filter');
		var selector = $(this).attr('data-filter');
		$('#twocol-container').isotope({ filter: selector });
		return false;
	});

	$('#threecol-filters a').click(function(){
		$('#threecol-filters li').removeClass('active-filter');
		$(this).parent().addClass('active-filter');
		var selector = $(this).attr('data-filter');
		$('#threecol-container').isotope({ filter: selector });
		return false;
	});

		// Initialize Masonry

	if(document.getElementById("#twocol-container") !== null){
		$('#twocol-container').isotope({
			itemSelector : '.work-item',
			layoutMode : 'fitRows'
		});
	};

	if(document.getElementById("#threecol-container") !== null){
		$('#threecol-container').isotope({
			itemSelector : '.work-item',
			layoutMode : 'fitRows'
		});
	};

	setTimeout(function(){$('.trigger').trigger('click');},500);

	////////// Mobile Responsive Menu

	$('#mobile-toggle').click(function(){
		if($('#main-nav').hasClass('menu-open')){
			$('#main-nav').removeClass('menu-open');
		} else {
			$('#main-nav').addClass('menu-open');
		}
	});


	////////// Home Social Hovers

	$('#home-social .twitter').mouseenter(function(){
		$('#home-social').addClass('twitter-bg');
		$('#home-social h3').css('color', '#fff');
		$('#home-social p').css('color', '#fff');
		$('#home-social a').css('color', '#fff');
	});

	$('#home-social .facebook').mouseenter(function(){
		$('#home-social').addClass('facebook-bg');
		$('#home-social h3').css('color', '#fff');
		$('#home-social p').css('color', '#fff');
		$('#home-social a').css('color', '#fff');
	});

	$('#home-social .linkedin').mouseenter(function(){
		$('#home-social').addClass('linkedin-bg');
		$('#home-social h3').css('color', '#fff');
		$('#home-social p').css('color', '#fff');
		$('#home-social a').css('color', '#fff');
	});

	$('#home-social .github').mouseenter(function(){
		$('#home-social').addClass('github-bg');
		$('#home-social h3').css('color', '#000');
		$('#home-social p').css('color', '#000');
		$('#home-social a').css('color', '#000');
	});

	$('#home-social i').mouseleave(function(){
		$('#home-social').removeClass('facebook-bg');
		$('#home-social').removeClass('twitter-bg');
		$('#home-social').removeClass('linkedin-bg');
		$('#home-social').removeClass('github-bg');
		$('#home-social h3').css('color', '#222');
		$('#home-social p').css('color', '#666');
		$('#home-social a').css('color', '#333');
	});

});
