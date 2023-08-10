$(document).ready(init)

function init() {
  var csrf = $('#hideBandings-check').attr('data-csrf')

  $('#hideBandings-check').on('change', function() {
    $.ajax({
      url: '/view-caseload/hide-bandings',
      method: 'POST',
      data: { _csrf: csrf, hideBandings: $(this).prop('checked') },
      xhrFields: {
        withCredentials: true,
      },
    }).done(function(resp) {
      location.reload()
    })
  })
}