const express = require('express')
const router = express.Router()


// Add your routes here - above the module.exports line

// myData object to pass to prototype versions
var myData = {
  users: [
    require(__dirname + '/data/user-1.json'),
    require(__dirname + '/data/user-2.json'),
    require(__dirname + '/data/user-3.json'),
    require(__dirname + '/data/user-4.json'),
    require(__dirname + '/data/user-5.json')
  ]
}

//Version routing
//Pass myData variable as parameter into version specific routes file
require('./routes/v1/routes.js')(router, myData);
require('./routes/v2/routes.js')(router, myData);
require('./routes/v3/routes.js')(router, myData);



module.exports = router
