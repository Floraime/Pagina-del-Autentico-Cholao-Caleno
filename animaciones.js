$(document).ready(function() {
    $('a[href^="#_"]')
   
    .click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
      return false;
    });
  });

  $('#draggable').draggable();