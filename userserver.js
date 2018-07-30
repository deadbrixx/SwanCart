var express = require('express');
var bodyparser = require('body-parser');
var userapp = express();
userapp.use(bodyparser.json());
userapp.use(bodyparser.urlencoded({'extended':true}));
userapp.use(express.static(__dirname));


var menufile = require('./server_modules/menus');
userapp.use('/userapi', menufile);

var registerfile = require('./server_modules/userregister');
userapp.use("/regapi", registerfile);

var loginfile = require('./server_modules/userlogin');
userapp.use("/logapi", loginfile);

var newprodfile = require('./server_modules/newproduct');
userapp.use("/newapi", newprodfile);

var regularprodfile = require('./server_modules/regularproduct');
userapp.use("/regularapi", regularprodfile);



userapp.listen(5000);
console.log("Server on 5000");