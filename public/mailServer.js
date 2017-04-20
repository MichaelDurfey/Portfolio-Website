$(function() {

  var form = $('#contact-form');

  var formMessages = $('#form-messages');

  $(form).submit(function(e) {

    e.preventDefault();

    var formData = $(form).serialize();

    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {

      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      $(formMessages).text(response);

      $('#name').val('');
      $('#email').val('');
      $('phone').val('');
      $('#message').val('');
    })
    .fail(function(data) {
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      if (data.responseText !== '') {
        $(formMessages).html(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });

  });

});