module.exports = function (router) {
  var version = "v1";
// require('./routes/3-0-0/routes.js')(router, myData);


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/ideologyquestion', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var ideologytype = req.session.data['ideologytype']

  // Check whether the variable matches a condition
  if (ideologytype == "type-2"){
    // Send user to next page
    res.redirect('/v1/ideology/type-2')
  } else {
    // Send user to ineligible page
    res.redirect('/v1/ideology/view')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/ideologyquestion-multiple', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var ideologytype = req.session.data['ideologytype']

  // Check whether the variable matches a condition
  if (ideologytype == "type-2"){
    // Send user to next page
    res.redirect('/v1/ideology/type-2multiple?update=true')
  } else {
    // Send user to ineligible page
    res.redirect('/v1/ideology/view-multiple?update=true&type=false')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/areyousure', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var remove = req.session.data['remove']

  // Check whether the variable matches a condition
  if (remove == "yes"){
    // Send user to next page
    res.redirect('/v1/ideology/view-multiple?unknown=true')
  } else {
    // Send user to ineligible page
    res.redirect('/v1/ideology/view-multiple?unknown=false')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/areyousure-deactivate', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var remove = req.session.data['remove']

  // Check whether the variable matches a condition
  if (remove == "yes"){
    // Send user to next page
    res.redirect('/v1/manage/edit-permissions2?deactivated=true')
  } else {
    // Send user to ineligible page
    res.redirect('/v1/manage/view-user')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/areyousure-activate', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var remove = req.session.data['remove']

  // Check whether the variable matches a condition
  if (remove == "yes"){
    // Send user to next page
    res.redirect('/v1/manage/edit-permissions2?deactivated=false&new=true')
  } else {
    // Send user to ineligible page
    res.redirect('/v1/manage/view-user')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/areyousure-deactivate2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var remove = req.session.data['remove']

  // Check whether the variable matches a condition
  if (remove == "yes"){
    // Send user to next page
    res.redirect('/v2/manage/edit-permissions2?deactivated=true')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/manage/view-user')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/areyousure-activate2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var remove = req.session.data['remove']

  // Check whether the variable matches a condition
  if (remove == "yes"){
    // Send user to next page
    res.redirect('/v2/manage/edit-permissions2?deactivated=false')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/manage/view-user')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/areyousure-suspend', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var suspend = req.session.data['suspend']

  // Check whether the variable matches a condition
  if (suspend == "yes"){
    // Send user to next page
    res.redirect('/v2/manage/view-user?deactivated=true')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/manage/view-user')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/areyousure-removeall', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var removeall = req.session.data['removeall']

  // Check whether the variable matches a condition
  if (removeall == "yes"){
    // Send user to next page
    res.redirect('/v2/manage/edit-group?new=true')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/manage/edit-permissions?addon=Owner')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/usergroup', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addon = req.session.data['addon']

  // Check whether the variable matches a condition
  if (addon == "Owner"){
    // Send user to next page
    res.redirect('/v2/manage/edit-group-owner?empty=true')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/manage/edit-group')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/usergroupowner', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addon = req.session.data['addon']

  // Check whether the variable matches a condition
  if (addon == "Owner"){
    // Send user to next page
    res.redirect('/v2/manage/edit-group-owner?empty=false')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/manage/areyousure-removeall')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/areyousure-group', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var deletegroup = req.session.data['deletegroup']

  // Check whether the variable matches a condition
  if (deletegroup == "yes"){
    // Send user to next page
    res.redirect('/v2/manage/confirmation-groupdelete')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/manage/view-group')
  }

})





// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/groupowneradd', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addgroup = req.session.data['addgroup']

  // Check whether the variable matches a condition
  if (addgroup == "yes"){
    // Send user to next page
    res.redirect('/v2/manage/edit-group-owner-add?empty=false')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/manage/edit-permissions2?new=false')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/groupowneradd2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addgroup = req.session.data['addgroup']

  // Check whether the variable matches a condition
  if (addgroup == "yes"){
    // Send user to next page
    res.redirect('/v2/manage/edit-group-owner-add?empty=false&added=true')
  } else {
    // Send user to ineligible page
    res.redirect('/v2/manage/edit-permissions2?new=false')
  }

})
}
