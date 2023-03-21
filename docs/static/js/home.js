function update_nav_state(initial) {
	initial = initial || false;

	var page_width = $(window).width();
	var pos = Math.round($(window).scrollTop());
	var limit = ($("#home-banner").offset().top + $("#home-banner").height()) - $(".site-navigation").height();

	if (page_width < 768) {
		// Assume mobile display.
		if ($(".site-navbar-top").css("display") === "none") {
			$(".site-navbar-top").slideDown();
		}
	} else {
		// Desktop-size display.
		if (pos > limit) {
	        $(".site-navbar").removeClass("transparent-nav");
	        $(".site-navbar-top").slideDown();
	    } else {
	        $(".site-navbar").addClass("transparent-nav");

	        if (initial === true) {
	        	$(".site-navbar-top").hide();
	        } else {
	        	$(".site-navbar-top").slideUp();
	        }
	    }
	}
}

$(document).ready(function() {
	// Run function at least once.
	update_nav_state(true);
	
	$("#loading-cover").fadeOut(1250);

	// Run function on scroll and window resize events.
	$(window).on("scroll resize", update_nav_state);
});