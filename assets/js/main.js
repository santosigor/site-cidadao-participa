// Ancora

$('.acr').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 50}, 800, 'linear');
});
