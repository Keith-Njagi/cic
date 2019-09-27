JQuery(document).ready(function ($) {
  // Services toggle
  $('#audit-assur').click(function () {
    $('.collapse').collapse('toggle')
  })

  // Responsive Top Nav-bar Slide Toggle
  $('.nav-button-light').click(function () {
    $('.nav-menu li a').slideToggle(200)
  })
  // Toggle between port items(developer and drummer)
  $('.port-item').click(function () {
    $('.collapse').collapse('hide')
  })

  $(document).on('click', '[data-toggle="lightbox"]', function (e) {
    e.preventDefault()
    $(this).ekkoLightbox()
  })
  // Services Block
  $('.service-item-block').click(function () {
    $('.service-collapse').addClass('.service-block').removeClass('.service-collapse')
  })
  // Services Collapse
  $('.service-item-block').click(function () {
    $('.service-block').addClass('.service-collapse').removeClass('.service-block')
  })
})
