$('.nav-item').click(function() {
  var img         = $(this).data('img');
  var class_name  = $(this).data('classname');
  var img_to_show = '<div class="' + class_name + ' logo"><img src="assets/img/' + img + '" /></div>';

  $('.content').prepend(img_to_show);
});
