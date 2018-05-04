$(function() {
	$('.text-item').mouseenter(function() {
		var item = $(this);
		var number = item.attr('data-text');
		console.log('number is', number);
		var dot = $('[data-dot="' + number + '"]');
		console.log('dot element is', dot);

		item.addClass('active');
		dot.addClass('active');
	});

	$('.text-item').mouseleave(function() {
		var item = $(this);
		var number = item.attr('data-text');
		var dot = $('[data-dot="' + number + '"]');

		item.removeClass('active');
		dot.removeClass('active');
	});
});