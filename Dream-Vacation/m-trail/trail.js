$(function() {
	$(document).one('click', function() {
		if ( $('audio').length ) {
			$('audio').get(0).play();
		}

		if ( $('video').length ) {
			$('video').get(0).play();
		}
	});
});