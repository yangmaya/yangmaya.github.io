$('.button').click(function() {
  var objects = ['assets/img/bee.png',
                 'assets/img/bird.png',
                 'assets/img/butterfly.png',
                 'bzz',
                 'chirp',
                 'peck'
                ];

  var colors = ['orange',
                'blue',
                'pink'
               ];

  var random_object_number = Math.floor(Math.random() * objects.length);
  var random_color_number = Math.floor(Math.random() * colors.length);
  var object_to_use = objects[random_object_number];
  var color_to_use = colors[random_color_number];
  var result = '';

  if (random_object_number < 3) {
    result = '<div class="object"><img src="' + object_to_use + '" /></div>';
  } else {
    result = '<div class="object ' + color_to_use + '">' + object_to_use + '</div>';
  }

  $('.content').prepend(result);
});

