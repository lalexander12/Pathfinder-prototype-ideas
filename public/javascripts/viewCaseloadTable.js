$(function () {
  $('.view-caseload').tablesorter({
    dateFormat: 'dd MMM yyyy',
    headers: {
      3: { sorter: 'shortDate' },
      4: { sorter: 'shortDate' },
    },
    sortList: [],
    headerTemplate: '{content}{icon}',
    widgets: ['zebra'],
  })
})