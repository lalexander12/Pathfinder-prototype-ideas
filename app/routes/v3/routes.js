module.exports = function (router) {
  var version = "v3";

// Setup
router.post('/' + version + '/setup-answer', function (req, res) {
  const ideologyversion = req.session.data['ideologyversion']
  const role = req.session.data['role']

  if (role === 'admin') {
    res.redirect('index')
  }
  else if (role === 'caseworker') {
      res.redirect('index')
      }

      else {
        res.redirect('index')
  }
})




// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/ideologyquestion', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var ideologytype = req.session.data['ideologytype']

  // Check whether the variable matches a condition
  if (ideologytype == "type-2"){
    res.redirect('/ideology/type-2')

  } else {
    res.redirect('/ideology/view')
  }

})


// Document upload
router.post('/' + version + '/documents/document-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var documenttype = req.session.data['document-type']

  // Check whether the variable matches a condition
  if (documenttype == "erg"){
    res.redirect('document-erg-upload')
  }
  else if (role === 'pgf') {
    res.redirect('document-pgf-upload')
    }
   else {
    res.redirect('document-other-upload')
  }

})


router.post('/' + version + '/documents/document-state-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var documentstate = req.session.data['document-state']

  // Check whether the variable matches a condition
  if (documentstate == "initial"){
    // Send user to next page
    res.redirect('document-initial-eligibility')
  } else {
    // Send user to ineligible page
    res.redirect('document-pop')
  }

})

router.post('/' + version + '/documents/document-pgf-eligibility-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var documenteligibility = req.session.data['document-initial-eligibility']

  // Check whether the variable matches a condition
  if (documenteligibility == "Yes"){
    // Send user to next page
    res.redirect('document-complete-location')
  } else {
    // Send user to ineligible page
    res.redirect('document-pgf-notes')
  }

})

router.post('/' + version + '/documents/document-pgf-notes-state-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var documentpgfnotes = req.session.data['document-pgf-notes-state']

  // Check whether the variable matches a condition
  if (documentpgfnotes == "No"){
    // Send user to next page
    res.redirect('document-pgf-dropout')

  } else {
    // Send user to ineligible page
    res.redirect('document-complete-location')
  }

})






// Document upload
router.post('/' + version + '/documents/document-complete-location-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var documentcompletelocation = req.session.data['document-complete-location']

  // Check whether the variable matches a condition
  if (documentcompletelocation == "custody"){
    // Send user to next page
    res.redirect('select-location-custody')
  } else {
    // Send user to ineligible page
    res.redirect('select-location-community')
  }

})





// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/ideologyquestion-multiple', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var ideologytype = req.session.data['ideologytype']

  // Check whether the variable matches a condition
  if (ideologytype == "type-2"){
    // Send user to next page
    res.redirect('/ideology/type-2multiple?update=true')
  } else {
    // Send user to ineligible page
    res.redirect('/ideology/view-multiple?update=true&type=false')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/ideology/areyousure', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var remove = req.session.data['remove']

  // Check whether the variable matches a condition
  if (remove == "yes"){
    // Send user to next page
    res.redirect('view-multiple?unknown=true')
  } else {
    // Send user to ineligible page
    res.redirect('view-multiple?unknown=false')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/manage/areyousure-deactivate', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var remove = req.session.data['remove']

  // Check whether the variable matches a condition
  if (remove == "yes"){
    // Send user to next page
    res.redirect('edit-permissions2?deactivated=true')
  } else {
    // Send user to ineligible page
    res.redirect('view-user')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/manage/areyousure-activate', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var remove = req.session.data['remove']

  // Check whether the variable matches a condition
  if (remove == "yes"){
    // Send user to next page
    res.redirect('edit-permissions2?deactivated=false&new=true')
  } else {
    // Send user to ineligible page
    res.redirect('view-user')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/manage/areyousure-deactivate2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var remove = req.session.data['remove']

  // Check whether the variable matches a condition
  if (remove == "yes"){
    // Send user to next page
    res.redirect('edit-permissions2?deactivated=true')
  } else {
    // Send user to ineligible page
    res.redirect('view-user')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/manage/areyousure-activate2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var remove = req.session.data['remove']

  // Check whether the variable matches a condition
  if (remove == "yes"){
    // Send user to next page
    res.redirect('edit-permissions2?deactivated=false')
  } else {
    // Send user to ineligible page
    res.redirect('view-user')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/manage/areyousure-suspend', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var suspend = req.session.data['suspend']

  // Check whether the variable matches a condition
  if (suspend == "yes"){
    // Send user to next page
    res.redirect('confirmation-removed')
  } else {
    // Send user to ineligible page
    res.redirect('view-group?groupname=Prison+-+North+East&empty=false')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/manage/areyousure-removeall', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var removeall = req.session.data['removeall']

  // Check whether the variable matches a condition
  if (removeall == "yes"){
    // Send user to next page
    res.redirect('edit-group?new=true')
  } else {
    // Send user to ineligible page
    res.redirect('edit-permissions?addon=Owner')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/manage/usergroup', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addon = req.session.data['addon']

  // Check whether the variable matches a condition
  if (addon == "Owner"){
    // Send user to next page
    res.redirect('edit-group-owner?empty=true')
  } else {
    // Send user to ineligible page
    res.redirect('edit-group')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/manage/usergroupowner', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addon = req.session.data['addon']

  // Check whether the variable matches a condition
  if (addon == "Owner"){
    // Send user to next page
    res.redirect('edit-group-owner?empty=false')
  } else {
    // Send user to ineligible page
    res.redirect('areyousure-removeall')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/manage/areyousure-group', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var deletegroup = req.session.data['deletegroup']

  // Check whether the variable matches a condition
  if (deletegroup == "yes"){
    // Send user to next page
    res.redirect('confirmation-groupdelete')
  } else {
    // Send user to ineligible page
    res.redirect('view-group')
  }

})





// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/manage/groupowneradd', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addgroup = req.session.data['addgroup']
  var newuser = req.session.data['new']

  // Check whether the variable matches a condition
  if (addgroup == "yes"){
    // Send user to next page
    res.redirect('edit-group-owner-add?empty=false')
  }

  else if (newuser == 'true') {
    res.redirect('edit-permissions2')

    }

  else {
    // Send user to ineligible page
    res.redirect('edit-cya')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/' + version + '/manage/groupowneradd2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addgroup = req.session.data['addgroup']
  var newuser = req.session.data['new']

  // Check whether the variable matches a condition
  if (addgroup == "yes"){
    // Send user to next page
    res.redirect('edit-group-owner-add?empty=false&added=true')
  }
  else if (newuser == 'true') {
    res.redirect('edit-permissions2')

    }
  else {
    // Send user to ineligible page
    res.redirect('edit-cya')
  }

})



// admingroups




router.post('/' + version + '/manage/edit-search-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var selectaccount = req.session.data['select-account']

  // Check whether the variable matches a condition
  if (selectaccount == "probation"){
    res.redirect('search-empty')
  }

   else {
    res.redirect('edit-select?name=Steve+Miller')
  }

})



router.post('/' + version + '/manage/edit-select-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var selectuser = req.session.data['select-user']

  // Check whether the variable matches a condition
  if (selectuser == "SteveMiller"){
    res.redirect('pf-user')
  }

   else {
    res.redirect('edit-permissions')
  }

})


router.post('/' + version + '/manage/edit-permissions-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addon = req.session.data['addon']
  var newuser = req.session.data['new']
  var name = req.session.data['name']
  var empty = req.session.data['empty']


  // Check whether the variable matches a condition
  if (addon == "Owner" && name == "Bob Brown")  {
    res.redirect('edit-group-owner?empty=true')
  }

  else if (addon == "Owner"){
    res.redirect('edit-group-owner-add?empty=false')
  }
  // else if (addon === 'Owner') {
  //   res.redirect('edit-group-owner?empty=true')
  //   }
  else if (name === "Carl Cooper") {
    res.redirect('edit-group?empty=true')
    }

  else if (newuser === 'false') {
    res.redirect('edit-cya')
    }
   else {
     res.redirect('edit-group')
  }

})


router.post('/' + version + '/manage/edit-group-owner-add-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var group = req.session.data['group']
  var newuser = req.session.data['new']

  // Check whether the variable matches a condition

  if (group == "unsure" && newuser == 'true') {
    res.redirect('edit-permissions2')
  }
  // else if (addon === 'Owner') {
  //   res.redirect('edit-group-owner?empty=true')
  //   }
  else if (group == "unsure" && newuser != 'true')  {
    res.redirect('edit-cya')
    }
   else {
     res.redirect('edit-group-owner')
  }

})




}
