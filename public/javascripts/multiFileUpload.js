const thisScript = $('script[src*=multiFileUpload]')
const nominalId = thisScript.attr('nominalId')

if (typeof MOJFrontend.MultiFileUpload !== 'undefined') {
  new MOJFrontend.MultiFileUpload({
    container: $('.moj-multi-file-upload'),
    uploadUrl: '/nominal/' + nominalId + '/documents/uploadItem',
    deleteUrl: '/nominal/' + nominalId + '/documents/deleteItem',
    dropzoneHintText: 'Drag and drop your files here.',
    uploadFileExitHook: uploadExit,
    fileDeleteHook: deleteExit,
    uploadFileErrorHook: errorHook,
  })

  function continueButtonEnabled(enabled) {
    const $continueButton = $('#continueButton')
    if (enabled) {
      $continueButton.removeAttr('disabled')
      $continueButton.removeAttr('aria-disabled')
      $continueButton.removeClass('govuk-button--disabled')
    } else {
      $continueButton.attr('disabled', 'disabled')
      $continueButton.attr('aria-disabled', 'true')
      $continueButton.addClass('govuk-button--disabled')
    }
  }

  // Uploading finished when all delete buttons have appeared
  function isAllFinished() {
    const $actions = $('.moj-multi-file-upload__actions')
    let finished = true
    $actions.each(function () {
      if ($(this).html() === '') {
        finished = false
      }
    })
    return finished
  }

  function uploadExit(handle, file, response) {
    const $actions = $('.moj-multi-file-upload__actions')
    if (isAllFinished()) {
      continueButtonEnabled(true)
    } else if ($('.moj-multi-file-upload__list')) {
      // another file has been added
      continueButtonEnabled(false)
    }
  }

  function deleteExit(handle, response) {
    const $row = $('.moj-multi-file-upload__row')
    if ($row && $row.length === 0) {
      continueButtonEnabled(false)
    }
  }

  function errorHook(handle, file, jqXHR, textStatus, errorThrown) {
    const message = file.name + ':' + (jqXHR.status === 413 ? 'File is over 100MB' : errorThrown || textStatus)
    const item = $(handle.getFileRowHtml(file))
    item.find('.moj-multi-file-upload__message').html(handle.getErrorHtml({ message: message }))
    handle.status.html(message)
    item.find('.moj-multi-file-upload__actions').append(handle.getDeleteButtonHtml({ filename: file.name }))
  }
}
