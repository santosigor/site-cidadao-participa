// Ancora
$('.acr').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 50}, 800, 'linear');
});

// Proximo passo
$('.btn-next').on('click', function (e) {
  e.preventDefault();
  $(this).hide();
  $('.acr').click();
  $('#passo2').css('display','inline-block').addClass('animation-passo2');
  $('.btn-finish').css('display','inline-block');
});
