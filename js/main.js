jQuery(document).ready(function ($) {
  // Responsive Top Nav-bar Slide Toggle
  $('.nav-button-light').click(function () {
    $('.nav-menu li a').slideToggle(200)
  })
  // Toggle between port items(developer and drummer)
  $('.port-item').click(function () {
    $('.collapse').collapse('hide');
  });

  $(document).on('click', '[data-toggle="lightbox"]', function (e) {
    e.preventDefault();
    $(this).ekkoLightbox();
  });

})