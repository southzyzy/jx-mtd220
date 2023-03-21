function display_top() {
	if ($(window).scrollTop() > 100) {
		$("#to-top").fadeIn();
	}
	else {
		$("#to-top").fadeOut();
	}
}

$(document).ready(function() {
	$(".no-href").on("click", function(e) {
		if ($(window).width() >= 768) {
			e.preventDefault();
			return false;
		}
	});
	

	$("#to-top").on("click touchend", function(e){
		e.preventDefault();
		
		$("html, body").stop().animate({
			scrollTop: 0,
		}, "slow", "swing");

		return false;
	});

	display_top();

	$(document).on("scroll", display_top);

});